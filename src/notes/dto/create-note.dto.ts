import { Category } from '../entities/category.entyty';

export class CreateNoteDto {
  name: string;
  category: Category;
  content: string;
}
