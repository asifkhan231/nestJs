import { MiddlewareConsumer, Module, NestModule, RequestMethod, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type:'mysql',
      host:"localhost",
      port:3306,
      username:"root",
      password:"Asif@123",
      database:"mysql__databade",
      entities:[],
      synchronize:true,
    })
  ],
  controllers: [AppController],
})
export class AppModule {}
