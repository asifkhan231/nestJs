import { BadRequestException, Injectable } from '@nestjs/common';
import { error } from 'console';

const cats = [
    {
        "cat-name":"sue",
        "age":1,
        "breed":"persian",
        "owner-name":"sneha"
    },
    {
        "cat-name":"mussi",
        "age":1.5,
        "breed":"indian",
        "owner-name":"Rahul"
    },
    {
        "cat-name":"suppi",
        "age":2,
        "breed":"persian",
        "owner-name":"neha"
    },
    {
        "cat-name":"ronnie",
        "age":3,
        "breed":"indian",
        "owner-name":"Rahul"
    },
    {
        "cat-name":"pihu",
        "age":2,
        "breed":"persian",
        "owner-name":"neha"
    }
]
@Injectable()
export class CatsInfoService {
 search(query){
    console.log(query)
    if(!query || !query?.trim().length){
        return new error("query string is empty")
    }

    const searchKey = query.toLowerCase()

    if(!isNaN(+searchKey)){
        throw new BadRequestException("enter any valid query")
    }

    const searchedCats = cats.filter(cat => {
        const catName =cat['cat-name'].toLowerCase()
        const ownerName = cat['owner-name'].toLowerCase()

        return catName.includes(searchKey) || ownerName.includes(searchKey)
    }) 

    if(searchKey.includes('lio')){
        return new Promise(resolve=>{
            setTimeout(()=>resolve(cats),7000)
        })
    }

    return searchedCats
 }
}
