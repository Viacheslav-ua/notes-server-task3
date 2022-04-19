import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateCategoryDto } from './dto/create-category.dto'
import { Category } from './category.model'
import { CategoryService } from './category.service'

@ApiTags('Category')
@Controller('category')
export class CategoryController {

  constructor(private categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({status: 201, type: Category})
  @Post()
  create(@Body() categoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(categoryDto)
  }

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, type: [Category] })
  @Get()
  getAll() {
    return this.categoryService.getAllCategories()
  }
}
