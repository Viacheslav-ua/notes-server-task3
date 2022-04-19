import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {

  @ApiProperty()
  readonly valueOption: string;

  @ApiProperty()
  readonly descriptionOption: string; 
}