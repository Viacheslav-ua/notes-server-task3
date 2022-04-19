import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Note } from 'src/notes/notes.model'
import { CategoryController } from './category.controller'
import { Category } from './category.model'
import { CategoryService } from './category.service'

@Module({
  providers: [CategoryService],
  controllers: [CategoryController],
  imports: [SequelizeModule.forFeature([Category, Note])],
  exports: [CategoryService],
})
export class CategoryModule {}