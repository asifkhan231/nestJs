import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers.authorization)
    const { authorization } = req.headers;

    if (!authorization)
      throw new HttpException("authorization not available", HttpStatus.FORBIDDEN)
    if (authorization !== "asifkhan")
      throw new HttpException("invalid authrization", HttpStatus.FORBIDDEN)
    else {
      next()
    }
    console.log("example middleware")
  }
}
