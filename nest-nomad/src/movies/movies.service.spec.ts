import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
    let service: MoviesService;

    beforeEach(async () => {            // init
        const module: TestingModule = await Test.createTestingModule({
            providers: [MoviesService],
        }).compile();

        service = module.get<MoviesService>(MoviesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe("getAll", () => {          // unit test for function MoviesService.getAll()
        it('should return an array', () => {
            const result = service.getAll();
            expect(result).toBeInstanceOf(Array)
        })
    });

    describe("getOne", () => {
        it("should return a movie", () => {
            service.createOne({
                "title": "TestMovie",
                "genres": ["test"],
                "year":2000,
            })
            const movie = service.getOne(1);
            expect(movie).toBeDefined();
            expect(movie.id).toEqual(1);
        })

        it("shold throw 404 error", () => {
            try {
                service.getOne(999);
            }
            catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
                expect(e.message).toEqual('`Movie with ID 999 not found.`');
            }
        })
    });


});
