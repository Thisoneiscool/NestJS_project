import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateDto } from 'src/cats/dtos/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateDto) {
    return this.catsService.create(createCatDto);
  }

  // @Get()
  // findAll(): string {
  //   return 'This action returns all cats';
  // }

  // @Get(':id')
  // findOne(@Param() params: any): string {
  //   console.log(params.id);
  //   return 'This actions returns a #${params.id} cat';
  // }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // @Get()
  // findAll(): Observable<any[]> {
  //   return of([]);
  // }
}
