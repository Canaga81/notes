import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateNotesDto } from './dto/create-notes.dto';
import { NotesService } from './notes.service';
import { UpdateNotesDto } from './dto/update-notes.dto';


@Controller('notes')
export class NotesController {

    constructor(private notesService: NotesService) {}


    @Get()
    list() {
        return this.notesService.list();
    }

    @Post()
    create(@Body() body: CreateNotesDto) {
        return this.notesService.create(body.title, body.desc);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.notesService.delete(id);
    }

    @Post(':id')
    update(@Param('id') id: string, @Body() body: UpdateNotesDto ) {
        return this.notesService.update(id, body)
    }

}