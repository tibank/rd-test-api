import { Category } from "./category.entyty";
import { Note } from "./note.entity";

export class StatNotes {
  category: Category;
  active: number;
  archived: number;  

  constructor(category: Category) {
    this.category = category;
    this.active = 0;
    this.archived = 0;
  }

  addNoteToStat(note: Note): void {
    if (note.archived) {
      this.archived++;
    } else {
      this.active++;
    }
  }
}
