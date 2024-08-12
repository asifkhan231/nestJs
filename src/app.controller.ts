import { Body, Controller, Delete, Get, Header, HostParam, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Redirect, Req, Res, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { Cat } from './appData/interface/interface.interface';
import { AppService } from './appData/app.service';
import { CreateCatDto } from './appData/DTO/create-cat.dto';
import { HttpExceptionFilter } from './appData/exception/http-exception/http-exception.filter';



// @Controller({host:':account.example.com'})
@Controller()
export class AppController {
  constructor(private appService: AppService) { }

  @Post('create-cat')
  // @UseFilters( new HttpExceptionFilter())
  // @UsePipes(new ValidationPipe({transform:true}))
    async createCat(@Body(
      new ValidationPipe(
        {transform:true,
          // dismissDefaultMessages:true //this will block showing the default massege ,but manually you can show any massage inside class-validate decorator
          // disableErrorMessages:true // this will stop sending error massages
          // whitelist:true // it just hide the unwanted data 
          // skipMissingProperties:true 
          // stopAtFirstError:true // stop execution at first error
        })
    ) createCatDto: CreateCatDto) {
    console.log(createCatDto)
    this.appService.create(createCatDto)
    return 
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

  // @Get('cats/:id')
  // findCat(@Query('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number) {
  //   return this.appService.findOne(id)
  // }

  @Get('cats/:id')
  findCat(@Query('id',new ValidationPipe) id: number) {
    return this.appService.findOne(id)
  }
}
