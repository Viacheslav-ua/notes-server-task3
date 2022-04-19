import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Category } from "src/category/category.model"

interface NoteCreationAttrs {
  categoryId: number;
  name: string;
  created: string;
  content: string;
  dates: string;
}

@Table({ tableName: 'notes' })
export class Note extends Model<Note, NoteCreationAttrs> {
  
  @ApiProperty({example: 1, description: 'Unique id'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  
  
  @ApiProperty({ example: 1, description: 'Category id' })
  @ForeignKey(() => Category)
  @Column({type: DataType.INTEGER})
  categoryId?: number;
    
  @BelongsTo(() => Category)
  category: Category


  @ApiProperty({example: 'Shopping', description: 'Note name'})
  @Column({type: DataType.STRING})
  name: string;

  @ApiProperty({example: 'Implement new feature 4/4/2022', description: 'Note description'})
  @Column({type: DataType.STRING})
  content: string;

  @ApiProperty({example: '4/4/2022, 5/4/2022', description: 'Date history'})
  @Column({type: DataType.STRING})
  dates: string;

  @ApiProperty({example: false, description: 'Is archive note?'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  isArchive: boolean;

}