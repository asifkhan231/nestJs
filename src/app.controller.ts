import { Body, Controller, Delete, Get, Header, HostParam, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Redirect, Req, Res, UseFilters, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { query, Request, Response } from 'express';


// @Controller({host:':account.example.com'})
@Controller()
export class AppController {
  constructor() { }

}
