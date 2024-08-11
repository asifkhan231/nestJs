import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) { }
  transform(value: Record<string, any>) {

    try {
      const parseValue = this.schema.parse(value)
      console.log(parseValue)
      return parseValue
    }catch(error){
      throw new HttpException("inserted data in not valid please insert again", HttpStatus.BAD_REQUEST)
    }
  }
}
