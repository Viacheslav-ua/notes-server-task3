import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateNoteDto } from './dto/create-note.dto'
import { GetNotesDto } from './dto/getoll-note.dto'
import { Note } from './notes.model'
import { NotesService } from './notes.service'

@ApiTags('Notes')
@Controller('/notes')
export class NotesController {

  constructor(private notesService: NotesService) {}

  @ApiOperation({ summary: 'Create note' })
  @ApiResponse({ status: 201, type: Note })
  @Post()
  create(@Body() noteDto: CreateNoteDto) {
    return this.notesService.createNote(noteDto)
  }

  @ApiOperation({ summary: 'Remove note by ID' })
  @ApiResponse({ status: 200, type: Number, description: 'Number of deleted'})
  @Delete('/:id')
  delete(@Param('id') id: number) {
    const countRowDeleted = this.notesService.removeNote(id)
    return countRowDeleted
  }

  @ApiOperation({ summary: 'Get note by ID' })
  @ApiResponse({ status: 200, type: Note })
  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.notesService.getOneNote(id)
  }

  @ApiOperation({ summary: 'Get all notes' })
  @ApiResponse({ status: 200, type: [Note] })
  @Get()
  getAll(@Query() dto: GetNotesDto) {
    return this.notesService.getNotes(dto)
  }

  @ApiOperation({ summary: 'Update note by ID' })
  @ApiResponse({ status: 200, type: Number, description: 'Number of updates' })
  @Patch('/:id')
  edit(@Param('id') id: number, @Body() noteDto: CreateNoteDto) {
    const countRowUpdated = this.notesService.editNote(id, noteDto)
    return countRowUpdated;
  }
}
  
