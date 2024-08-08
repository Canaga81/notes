import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from './entities/Note.entity';

@Module({

  imports: [NotesModule,

    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://notes_nest_db:notes123@notesnest.jced1.mongodb.net/notesApp?retryWrites=true&w=majority&appName=NotesNest',
      entities: [NoteEntity],
      useNewUrlParser: true,
      synchronize: true,
      logging: ['query', 'error']
    }),

  ],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule {}