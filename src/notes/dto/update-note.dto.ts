import { ApiProperty } from "@nestjs/swagger"

export class UpdateNoteDto {
  @ApiProperty({required: false})
  readonly categoryId: number;

  @ApiProperty({required: false})
  readonly name: string;

  @ApiProperty({required: false})
  readonly content: string;
  
  @ApiProperty({required: false})
  readonly dates: string;

  @ApiProperty({required: false})
  readonly isArchive: boolean;
}