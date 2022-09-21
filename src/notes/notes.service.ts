import { Injectable, NotFoundException } from '@nestjs/common';
import { DatastoreService } from 'src/datastore/datastore.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
import { StatNotes } from './entities/statCategories';

@Injectable()
export class NotesService {
  constructor(private dataStore: DatastoreService) {}

  create(createNoteDto: CreateNoteDto) {
    const note = new Note(createNoteDto);
    note.id = this.getNewNoteId();
    this.dataStore.notes.push(note);

    return note;
  }

  findAll(): Note[] {
    return this.dataStore.notes;
  }

  findOne(id: number): Note | null {
    const note = this.dataStore.notes.find((element) => element.id === id);
    if (!note) {
      throw new NotFoundException('Not found note by id: ' + id);
    }
    return note;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    const note = this.findOne(id);
    if (note) {
      Object.assign(note, updateNoteDto);
    } else {
      throw new NotFoundException('Not found note by id: ' + id);
    }

    return note;
  }

  remove(id: number) {
    const index = this.dataStore.notes.findIndex(
      (element) => element.id === id,
    );

    if (index === -1) {
      throw new NotFoundException('Not found note by id: ' + id);
    }

    let result: Note[];
    if (index === 0) {
      result = this.dataStore.notes.slice(1);
    } else if (index < this.dataStore.notes.length - 1) {
      result = this.dataStore.notes
        .slice(0, index)
        .concat(this.dataStore.notes.slice(index + 1));
    } else {
      result = this.dataStore.notes.slice(0, index);
    }
    this.dataStore.notes = result;
  }

  getStat() {
    const mapCategories = new Map();

    for (let i = 0; i < this.dataStore.notes.length; i++) {
      const category = this.dataStore.notes[i].category;
      if (mapCategories.has(category)) {
        mapCategories.get(category).addNoteToStat(this.dataStore.notes[i]);
      } else {
        const statItem = new StatNotes(category);
        statItem.addNoteToStat(this.dataStore.notes[i]);
        mapCategories.set(category, statItem);
      }
    }
    const result = [];
    for (let value of mapCategories.values()) {
      result.push(value);
    }

    return result;
  }

  getNewNoteId() {
    if (!this.dataStore.notes.length) {
      return 1;
    }
    this.dataStore.notes.sort((a, b) => a.id - b.id);

    return this.dataStore.notes[this.dataStore.notes.length - 1].id + 1;
  }
}
