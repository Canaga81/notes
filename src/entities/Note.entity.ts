import { NotesStatus } from "src/notes/dto/create-notes.dto";
import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm";

@Entity()
export class NoteEntity {

    @ObjectIdColumn()
    _id: ObjectId

    @Column()
    title: string

    @Column()
    desc: string

    @Column()
    status: NotesStatus
    
}