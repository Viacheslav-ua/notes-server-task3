import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class GetNotesDto {
  @ApiProperty({example: 'active', description: 'Get (active) or (archive) or all () notes', required: false})
  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(7)
  readonly query?: string;
}