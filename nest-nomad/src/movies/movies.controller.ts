import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entity/movies.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(readonly moviesService: MoviesService) { }

    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }

    @Get("search")
    search(@Query("year") searchingYear:string) {
        return `We are searching for a movie after year: ${searchingYear} `;
    }

    @Get(":id")
    getOne(@Param("id") movieId: number): Movie{
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDTO) {
        return this.moviesService.createOne(movieData)
    }

    @Delete(":id")
    delete(@Param("id") movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(":id")
    patch(@Param("id") movieId: number, @Body() updateData: UpdateMovieDTO) {
        return this.moviesService.updateOne(movieId, updateData);
    }


}
