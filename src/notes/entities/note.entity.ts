import { Category } from './category.entyty';

export class Note {
  id: number;
  name: string;
  created: Date = new Date();
  category: Category;
  content: string;
  archived: boolean = false;

  constructor(partial: Partial<Note>) {
    Object.assign(this, partial);
  }
}
