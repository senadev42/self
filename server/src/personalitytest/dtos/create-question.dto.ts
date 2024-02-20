// create-question.dto.ts
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class OptionDto {
  @IsString()
  @IsNotEmpty()
  label: string;

  @IsNumber()
  @IsNotEmpty()
  points: number;
}

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  question: string;

  @ValidateNested({ each: true })
  @Type(() => OptionDto)
  @ArrayMinSize(4)
  @ArrayMaxSize(4)
  options: OptionDto[];
}
