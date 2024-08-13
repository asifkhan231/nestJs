import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { Cat } from 'src/appData/interface/interface.interface';
import { array } from 'zod';
type recentSearchList = Array<{ query: string, data: Cat[] }>
@Injectable()
export class RecentSearchCatInfoService {
    private readonly store = new Map<string, recentSearchList>();
    addList(token: string, query: string, data: Cat[]) {
        const recentList = this.store.get(token) || []

        recentList.unshift({ query, data })
        this.store.set(token, recentList)
    }

    find(token: string) {
        const recentList = this.store.get(token)
        console.log(this.store)
        return recentList || []
    }

    findByTokenAndQuery(token: string, query: string) {
        const recentList = this.find(token)

        return recentList.filter(list => {
            return list.query.includes(query.toLowerCase())
        })
    }



}
