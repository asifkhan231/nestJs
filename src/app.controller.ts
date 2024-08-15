import { Body, Controller, Delete, Get, Header, HostParam, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Redirect, Req, Res, UseFilters, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { query, Request, Response } from 'express';
import { Observable } from 'rxjs';
import { Cat } from './appData/interface/interface.interface';
import { AppService } from './appData/app.service';
import { CreateCatDto } from './appData/DTO/create-cat.dto';
import { CatsInfoService } from './appData/services/cats-info/cats-info.service';
import { RecentSearchCatInfoService } from './appData/services/recent-search-cat-info/recent-search-cat-info.service';
import { LoggingInterceptor } from './appData/interceptors/logging/logging.interceptor';



// @Controller({host:':account.example.com'})
@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private catsInfoService: CatsInfoService,
    private recentSearchCatInfo:RecentSearchCatInfoService
  ) { }

  @Get('cats')
  @UseInterceptors(LoggingInterceptor)
  findCatsIfo(@Query('query') query:string) {

    return this.catsInfoService.search(query || '')
  }

  @Get('searchCat')
  recentSearch(@Query('token') token:string){
    return this.recentSearchCatInfo.find(token)
  }
   @Get('home')
  hello(){
    return "Hello ,world!"
  }
}
