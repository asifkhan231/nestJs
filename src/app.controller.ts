import { Body, Controller, Delete, Get, Header, HostParam, HttpCode, HttpStatus, Param, Post, Put, Query, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { Cat } from './appData/interface/interface.interface';
import { AppService } from './appData/app.service';
import { CreateCatDto } from './appData/DTO/create-cat.dto';



// @Controller({host:':account.example.com'})
@Controller()
export class AppController {
  constructor(private appService: AppService) { }

  @Post('create-cat')
  async createCat(@Body() createCatDto: CreateCatDto) {
    this.appService.create(createCatDto)
  }

  @Delete('delete-cat')
  async removeCat(@Body () createCatDto: CreateCatDto){
    this.appService.removecat(createCatDto)
  }

  @Get('Cats')
  async findall():Promise<Cat[]>{
    return this.appService.findall();
  }
}
