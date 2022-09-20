import { Injectable } from '@nestjs/common';
import { notesMocked } from 'src/assets/notes.mocked';
import { categoriesMocked } from 'src/assets/categories.mocked';
import { Category } from 'src/notes/entities/category.entyty';
import { Note } from 'src/notes/entities/note.entity';

@Injectable()
export class DatastoreService {
  public readonly categories: Category[];
  public readonly notes: Note[];

  constructor() {
    this.notes = this.loadNotes();
    this.categories = this.loadCategories();
  }

  loadCategories(): Category[] {
    return categoriesMocked;
  }

  loadNotes(): Note[] {
    return notesMocked;
  }
}
