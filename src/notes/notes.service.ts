import { InjectRepository } from "@nestjs/typeorm";
import { NotesStatus } from "./dto/create-notes.dto";
import { NoteEntity } from "src/entities/Note.entity";
import { Repository } from "typeorm";
import { ObjectId } from "mongodb";
import { UpdateNotesDto } from "./dto/update-notes.dto";

export class NotesService {

    constructor(
        @InjectRepository(NoteEntity)
        private noteRepo: Repository<NoteEntity>
    ) {}

    list() {
        return this.noteRepo.find({})
    }

    async create(title: string, desc: string) {
        
        let note = {
            title,
            desc,
            status: NotesStatus.PENDING
        }

        let result = await this.noteRepo.save(note);
        
        return result;

    }

    async delete(id: string) {

        await this.noteRepo.delete( { _id: new ObjectId(id) } )

        return {
            message: "Note Deleted Successfully.",
        }

    }

    async update(id: string, params: UpdateNotesDto) {

        let result = await this.noteRepo.update( { _id: new ObjectId(id) } , params)

        return {
            message: "Note Updated Successfully.",
            result
        }

    }

}