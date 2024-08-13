import { MiddlewareConsumer, Module, NestModule, RequestMethod, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './appData/app.service';
import { CatsInfoService } from './appData/services/cats-info/cats-info.service';
import { RecentSearchCatInfoService } from './appData/services/recent-search-cat-info/recent-search-cat-info.service';

@Module({
  controllers: [AppController],
  providers: [AppService,CatsInfoService,RecentSearchCatInfoService]
})
export class AppModule {}
