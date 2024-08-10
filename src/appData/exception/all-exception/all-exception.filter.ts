import { ArgumentsHost, Catch, ExceptionFilter, HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { timeStamp } from 'console';

@Catch()
export class AllExceptionFilter<T> implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) { }
  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.

    const { httpAdapter } = this.httpAdapterHost;

    console.log(httpAdapter)
    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {
      statusCode: httpStatus,
      timeStamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest())
    }

    httpAdapter.reply(ctx.getResponse(),responseBody,httpStatus)
  }
}
