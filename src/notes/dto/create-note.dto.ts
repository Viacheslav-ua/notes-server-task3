import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNumber, IsOptional, IsString, MaxLength, MinLength,  } from "class-validator"



export class CreateNoteDto {

  
  @ApiProperty({ required: false })
  @IsOptional()  
  @IsNumber()
  readonly categoryId: number;

  @ApiProperty({ required: false })
  @IsOptional()  
  @IsString()
  @MaxLength(50)  
  readonly name: string;

  @ApiProperty({ required: false })
  @IsOptional()  
  @IsString()
  @MaxLength(255) 
  readonly content: string;
  
  @ApiProperty({ required: false })
  @IsOptional()  
  @IsString()
  @MinLength(8)
  @MaxLength(100) 
  readonly dates: string;

  @ApiProperty({ required: false })
  @IsOptional()  
  @IsBoolean()
  readonly isArchive: boolean;
}