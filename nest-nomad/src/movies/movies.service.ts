import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entity/movies.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];
    
    getAll(): Movie[]{
        return this.movies;
    }

    getOne(id:number): Movie{
        const movie = this.movies.find(movie => movie.id === id);
        if (!movie) {
            throw new NotFoundException(`Movie with ID not found : ${id}`);
        }
        return movie;
    }

    deleteOne(id: number){
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    createOne(movieData:CreateMovieDTO) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        });
    }

    updateOne(id: number, updateData: UpdateMovieDTO) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({
            ...movie,
            ...updateData
        });
    }

}
