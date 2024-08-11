import { Body, Controller, Delete, Get, Header, HostParam, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Redirect, Req, Res, UseFilters } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { Cat } from './appData/interface/interface.interface';
import { AppService } from './appData/app.service';
import { CreateCatDto } from './appData/DTO/create-cat.dto';
import { HttpExceptionFilter } from './appData/exception/http-exception/http-exception.filter';
import { copyFileSync } from 'fs';
import { ValidationPipe } from './appData/custom-pipe/validation-pipe/validation-pipe.pipe';
import { ZodValidationPipe } from './appData/custom-pipe/zod-validation/zod-validation.pipe';
import { createCatSchema } from './appData/schema/create-cat.schema';



// @Controller({host:':account.example.com'})
@Controller()
export class AppController {
  constructor(private appService: AppService) { }

  @Post('create-cat')
  // @UseFilters( new HttpExceptionFilter())
  // async createCat(@Body(ValidationPipe) createCatDto: CreateCatDto) {
    async createCat(@Body(new ZodValidationPipe(createCatSchema)) createCatDto: CreateCatDto) {
    console.log(createCatDto.age.toPrecision())
    this.appService.create(createCatDto)
  }

  @Delete('delete-cat')
  async removeCat(@Body() createCatDto: CreateCatDto) {
    this.appService.removecat(createCatDto)
  }

  @Get('Cats')
  async findall(): Promise<Cat[]> {
    return this.appService.findall();
  }

  // @Get('cats/:id')
  // findCat(@Param('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number) {
  //   return this.appService.findOne(id)
  // }

  @Get('cats/:id')
  findCat(@Query('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number) {
    return this.appService.findOne(id)
  }

}
