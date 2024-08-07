import { Injectable } from '@nestjs/common';
import { Cat } from './interface/interface.interface';

@Injectable()
export class AppService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat)
    }

    removecat(cat:Cat){
        this.cats.unshift(cat)
    }

    findall(): Cat[] {
        return this.cats;
    }

}
