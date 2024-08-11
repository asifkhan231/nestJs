import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateCatDto } from 'src/appData/DTO/create-cat.dto';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: CreateCatDto, metadata: ArgumentMetadata) {
    console.log(metadata)
    const parseIntValue = parseInt(value.age.toString())

    if(isNaN(parseIntValue)){
      console.log(`${value.age} is not a integer value`)
      throw new HttpException('invalid data type for property age ,it should be ineteger', HttpStatus.BAD_REQUEST)

    }
    console.log(`${parseIntValue} is a integer value`)
   return {...value,age:parseIntValue}
  }
}
