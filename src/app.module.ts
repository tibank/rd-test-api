import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { DatastoreService } from './datastore/datastore.service';
import { DatastoreModule } from './datastore/datastore.module';

@Module({
  imports: [NotesModule, DatastoreModule],
  controllers: [AppController],
  providers: [AppService, DatastoreService],
})
export class AppModule {}
