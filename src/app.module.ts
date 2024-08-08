import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './appData/app.service';
import { ExampleMiddleware } from './appData/middleware/example/example.middleware';
import { AnotherMiddleware } from './appData/middleware/another/another.middleware';

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ExampleMiddleware).forRoutes('/')
    //  consumer.apply(ExampleMiddleware).forRoutes(AppController)
    consumer.apply(ExampleMiddleware).forRoutes(
      {
        path: "cats",
        method: RequestMethod.GET
      },
      {
        path: "create-cat",
        method: RequestMethod.POST
      }).apply(AnotherMiddleware).forRoutes(
        {
          path: 'delete-cat',
          method: RequestMethod.DELETE
        }
      )
  }
}
