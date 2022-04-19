import { ApiProperty } from "@nestjs/swagger"

export class GetAllQueryDto {
  @ApiProperty({example: 'active', description: 'Get (active) or (archive) or all () notes', required: false})
  readonly query?: string;
  readonly active?: string;
  readonly archive?: string;

}