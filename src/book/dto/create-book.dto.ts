import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {Category} from '../schemas/book.schema'

export class CreateBookDto{
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsNumber()
    readonly price: number;

    @IsNotEmpty()
    @IsString()
    readonly author: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsEnum(Category, {message: 'Please enter correct category.'})
    readonly category: Category;
}