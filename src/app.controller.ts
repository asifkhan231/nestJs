import { Body, Controller, Delete, Get, Header, HostParam, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Redirect, Req, Res, UseFilters, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { Cat } from './appData/interface/interface.interface';
import { AppService } from './appData/app.service';
import { CreateCatDto } from './appData/DTO/create-cat.dto';
import { HttpExceptionFilter } from './appData/exception/http-exception/http-exception.filter';
import { AuthGuard } from './appData/guards/auth/auth.guard';
import { Roles } from './appData/decorator/role/role.decorator';
import { RoleGuard } from './appData/guards/role/role.guard';



// @Controller({host:':account.example.com'})
@Controller()
export class AppController {
  constructor(private appService: AppService) { }

  @Post('create-cat')
  async createCat(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto)
    this.appService.create(createCatDto)
    return
  }

  @Delete('delete-cat')
  async removeCat(@Body() createCatDto: CreateCatDto) {
    this.appService.removecat(createCatDto)
  }

  @Get('Cats')
  @UseGuards(AuthGuard)
  async findall(): Promise<Cat[]> {
    return this.appService.findall();
  }

  @Get('user')
  @Roles(['owner', 'manager','man'])
  @UseGuards(RoleGuard)
  getuser() {
    return { username: "Asif Khan" }
  }

  // @Get('cats/:id')
  // findCat(@Param('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number) {
  //   return this.appService.findOne(id)
  // }

  // @Get('cats/:id')
  // findCat(@Query('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number) {
  //   return this.appService.findOne(id)
  // }

}
