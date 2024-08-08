import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsString, MinLength } from "class-validator";
import { NotesStatus } from "./create-notes.dto";

export class UpdateNotesDto {

    @Type()
    @ApiProperty()
    @IsString() 
    @MinLength(3)   
    title: string

    @Type()
    @ApiProperty()
    @IsString()
    @MinLength(3)
    desc: string

    @Type()
    @ApiProperty( { enum: NotesStatus } )
    @IsEnum(NotesStatus)
    status: NotesStatus

}