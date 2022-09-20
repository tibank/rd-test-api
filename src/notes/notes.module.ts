import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { DatastoreService } from 'src/datastore/datastore.service';
import { DatastoreModule } from 'src/datastore/datastore.module';

@Module({
  imports: [DatastoreModule],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
