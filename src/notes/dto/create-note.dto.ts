import { ApiProperty } from "@nestjs/swagger"

export class CreateNoteDto {
  @ApiProperty({required: false})
  readonly categoryId: number;

  @ApiProperty({required: false})
  readonly name: string;

  @ApiProperty({required: false})
  readonly content: string; 
}