import { PartialType } from '@nestjs/mapped-types';
import { Category } from '../entities/category.entyty';
import { CreateNoteDto } from './create-note.dto';

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
  name: string;
  category: Category;
  content: string;
  archived: boolean;
}
