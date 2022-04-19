import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateCategoryDto } from './dto/create-category.dto'
import { Category } from './category.model'

@Injectable()
export class CategoryService {

  constructor(@InjectModel(Category) private categoryRepository: typeof Category) {}

  async createCategory(dto: CreateCategoryDto) {
    const category = await this.categoryRepository.create(dto)
    return category
  }

  async getAllCategories() {
    const categories = await this.categoryRepository.findAll()
    return categories
  }
}
