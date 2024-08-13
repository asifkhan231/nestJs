import { CallHandler, ExecutionContext, Injectable, NestInterceptor, ServiceUnavailableException } from '@nestjs/common';
import { Request } from 'express';
import { catchError, Observable, of, tap, timeout } from 'rxjs';
import { Cat } from 'src/appData/interface/interface.interface';
import { RecentSearchCatInfoService } from 'src/appData/services/recent-search-cat-info/recent-search-cat-info.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private recentSearchedCatInfo: RecentSearchCatInfoService) { }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest()

    const { token, query } = request.query

    console.log({token,query})
    const cachedList = this.recentSearchedCatInfo.findByTokenAndQuery(token,query)

    if(cachedList.length){
      console.log('cached list')

      const recentList = cachedList.reduce((acclist,cacheResult)=>{
        acclist.push(...cacheResult.data);

        return acclist
      },[])

      return of(recentList)
    }

    return next.handle().pipe(
      timeout(700),
      tap(
        (list: Cat[]) => {
          if (token && query?.trim().length) {
            this.recentSearchedCatInfo.addList(token, query, list);
          }
        }
      ),
      catchError(error => {
        throw new ServiceUnavailableException(error)
      })
    );
  }
}
