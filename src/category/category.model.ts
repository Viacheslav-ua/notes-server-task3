import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Note } from "src/notes/notes.model"

export interface CategoryCreationAttrs {
  id: number;
  valueOption: string;
  descriptionOption: string;
}

@Table({ tableName: 'category' })
export class Category extends Model<Category, CategoryCreationAttrs> {

  @ApiProperty({example: 1, description: 'Unique id'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  
  @ApiProperty({example: 'lightbulb', description: 'Value for select option'})
  @Column({type: DataType.STRING})
  valueOption: string;

  @ApiProperty({example: 'Idea', description: 'Description for select option'})
  @Column({type: DataType.STRING})
  descriptionOption: string;

  
  @HasMany(() => Note)
  notes: Note[]
}