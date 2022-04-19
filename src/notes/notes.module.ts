import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Category } from 'src/category/category.model'
import { NotesController } from './notes.controller'
import { Note } from './notes.model'
import { NotesService } from './notes.service'

@Module({
  controllers: [NotesController],
  providers: [NotesService],
  imports: [SequelizeModule.forFeature([Note, Category])],
  exports: [NotesService]
})
export class NotesModule {}
