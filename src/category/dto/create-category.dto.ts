import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCategoryDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)  
  readonly valueOption: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)  
  readonly descriptionOption: string; 
}