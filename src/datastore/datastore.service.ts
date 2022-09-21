import { Injectable } from '@nestjs/common';
import { notesMocked } from 'src/assets/notes.mocked';
import { categoriesMocked } from 'src/assets/categories.mocked';
import { Category } from 'src/notes/entities/category.entyty';
import { Note } from 'src/notes/entities/note.entity';

@Injectable()
export class DatastoreService {
  public categories: Category[];
  public notes: Note[];

  constructor() {
    this.categories = this.loadCategories();
    this.notes = this.loadNotes();
  }

  loadCategories(): Category[] {
    //categoriesMocked.forEach((x) => this.categories.push(x));
    return categoriesMocked;
  }

  loadNotes(): Note[] {
    const arr = [];
    notesMocked.forEach((elem) => {
      const category = this.categories.find((x) => x.id === elem.category.id);
      if (category) {
        elem.category = category;
      }
    });
    return notesMocked;
  }
}
