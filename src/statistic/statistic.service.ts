import { Injectable } from '@nestjs/common'
import { CategoryService } from 'src/category/category.service'
import { NotesService } from 'src/notes/notes.service'

@Injectable()
export class StatisticService {

  constructor(
    private notesService: NotesService,
    private categoryService: CategoryService,
  ) { }

  async getStatistic() {
    const category = await this.categoryService.getAllCategories()
    const activeNotes = await this.notesService.getNotesByArchive(false)
    const archiveNotes = await this.notesService.getNotesByArchive(true)  
    
    const statisticData = category.map((item) => {
      return {
        id: item.id,
        valueOption: item.valueOption,
        descriptionOption: item.descriptionOption,
        archived: archiveNotes.filter(note => note.categoryId === item.id).length,
        active: activeNotes.filter(note => note.categoryId === item.id).length,
      }
    })

    return statisticData
  }

}
