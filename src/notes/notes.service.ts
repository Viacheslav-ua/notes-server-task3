import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateNoteDto } from './dto/create-note.dto'
import { GetAllQueryDto } from './dto/getoll-note.dto'
import { UpdateNoteDto } from './dto/update-note.dto'
import { Note } from './notes.model'

@Injectable()
export class NotesService {

  constructor(@InjectModel(Note) private noteRepository: typeof Note) { }

  async createNote(dto: CreateNoteDto): Promise<Note> {
    const note = await this.noteRepository.create(dto)
    return note
  }

  async getNotes(dto: GetAllQueryDto = null): Promise<Note[]> {
    const notes = await this.noteRepository.findAll({ where: this.setParams(dto), include: {all: true}})
    return notes
  }

  async getNotesByArchive(isArchive: boolean): Promise<Note[]> {
    const notes = await this.noteRepository.findAll({ where: { isArchive: isArchive } })
    return notes
  }

  async getOneNote(idNote: number): Promise<Note> {
    const notes = await this.noteRepository.findOne({ where: { id: idNote }, include: {all: true} })
    return notes
  }

  async removeNote(idNote: number): Promise<Number> {
    const removeCount = await this.noteRepository.destroy({ where: { id: idNote } })
    return removeCount
  }

  async editNote(idNote: number, dto: UpdateNoteDto) {
    const updatedCount = await this.noteRepository.update({ ...dto }, { where: { id: idNote } })
    return updatedCount
  }

  setParams(dto: GetAllQueryDto) {
    const { active, archive } = dto
    if (active  !== undefined) {
      return { isArchive: false };
    }
    if (archive  !== undefined) {
      return { isArchive: true }
    }
    return
  }

} 
