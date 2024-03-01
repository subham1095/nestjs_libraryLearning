import {Category} from '../schemas/book.schema'
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBookDto{
    
    @IsOptional()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsNumber()
    readonly price: number;

    @IsOptional()
    @IsString()
    readonly author: string;

    @IsOptional()
    @IsString()
    readonly description: string;

    @IsOptional()
    @IsEnum(Category, {message: 'Please enter correct category.'})
    readonly category: Category;
}