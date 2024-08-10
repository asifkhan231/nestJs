import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpExceptionFilter } from './appData/exception/http-exception/http-exception.filter';
import { AllExceptionFilter } from './appData/exception/all-exception/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // app.useGlobalFilters(new HttpExceptionFilter())

  const httpAdapter = app.get(HttpAdapterHost)
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
