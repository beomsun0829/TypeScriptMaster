import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDTO } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController{
    constructor(private catsService: CatsService) { }

    @Post()
    async create(@Body() CreateCatDTO: CreateCatDTO) {
        this.catsService.create(CreateCatDTO);
    }

    @Get()
    async findAll(): Promise<Cat[]>{
        return this.catsService.findAll();
    }
}