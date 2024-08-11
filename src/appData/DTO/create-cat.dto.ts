import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCatDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly age: number;

    @IsString()
    readonly breed: string;
}