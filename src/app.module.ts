import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WebsocketsGateway } from './gateways/websocket/websocket.gateway';

@Module({
  controllers: [AppController],
  providers: [WebsocketsGateway],
})
export class AppModule {}
