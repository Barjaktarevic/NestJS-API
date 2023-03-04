import { IsNotEmpty, IsEnum, IsNumber, IsString, IsUrl } from "class-validator";

enum makeEnum {
    BMW = "BMW",
    VW = "VW",
    Audi = "Audi",
    Mercedes = "Mercedes",
    Ford = "Ford",
    Toyota = "Toyota"
}

export class CreateModelDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    abbreviation: string

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    image: string

    @IsNotEmpty()
    @IsString()
    @IsEnum(makeEnum)
    make: string

    @IsNotEmpty()
    @IsNumber()
    productionStart: number
}