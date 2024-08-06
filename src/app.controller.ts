import { Body, Controller, Delete, Get,Header,HostParam,HttpCode,HttpStatus,Param,Post,Put,Query,Redirect,Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';


class CreateCatDto {
  name:string;
  age:number;
  breed:string;
}

// @Controller({host:':account.example.com'})
@Controller()
export class AppController {
  constructor() {}

  // @Get("cats")
  // getHello(@Req() request:Request, response:Response): string {
  //   return "hello world "
  // }

  // @Get("cats")
  // @Redirect("https://docs.nestjs.com",302)
  // getHello(@Query('version') version) {
  //   if(version && version === '5'){
  //     return {url:"https://docs.nestjs.com/v5/"}
  //   }
  // }

  // @Get("cats/:id")
  // // getHello(@Param() param:any): string {
  // getHello(@Param('id') id:string): string {
  //   console.log(id)
  //   return `this action returns a #${id} cat `
  // }


//   @Get()
//  findall():Promise<any[a]>{
//   return [a];
//  }

  // @Post('add-cat')
  // @Header("user-name","Asif Khan")
  // create(@Req() request:Request, response:Response): string{
  
  //   return "this will add new cat"
  // }

  
  
  @Post('add-cat')
  create(@Body() createCatDto:CreateCatDto ): string{
    console.log(createCatDto)
    return `${createCatDto}`
  }

  @Put('cats/:id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} cat`;
  }

  @Delete('cats/:id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
//library specific approch

// @Post('time')
// postall(@Res() res:Response){
//   res.status(HttpStatus.CREATED).send("hello")
// }

@Post('time')
postall(@Res({passthrough:true})  res:Response){
  res.status(HttpStatus.CREATED).send("hello")
}

@Get('time')
findall(@Res() res:Response){
  res.status(HttpStatus.OK).json([])
}
}
