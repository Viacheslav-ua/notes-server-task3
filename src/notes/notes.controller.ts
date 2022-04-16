import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateNoteDto } from './dto/create-note.dto';
import { Note } from './notes.model';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {

  constructor(private notesService: NotesService) {}

  @ApiOperation({ summary: 'Create note' })
  @ApiResponse({status: 200, type: Note})
  @Post()
  create(@Body() noteDto: CreateNoteDto) {
    return this.notesService.createNote(noteDto)
  }

  @ApiOperation({ summary: 'Create note' })
  @ApiResponse({ status: 200, type: [Note] })
  @Get()
  getAll() {
    return this.notesService.getAllNote()
  }
}
