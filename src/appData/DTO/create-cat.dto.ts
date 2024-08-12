import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCatDto {
    @IsString()
    @IsNotEmpty()
    name: string;


    @IsNumber()
    @IsNotEmpty()
    @Type(()=> Number)
    age: number;

    @IsString()
    breed: string;
}