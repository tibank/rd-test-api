import { Category } from './category.entyty';
import { Allow, IsBoolean, IsDate, IsInt, IsNotEmpty, Min, ValidateNested } from 'class-validator';

export class Note {
  @IsInt()
  @Min(1)
  id: number;
  @IsNotEmpty()
  name: string;
  @IsDate()
  created: Date = new Date();
  @ValidateNested()
  category: Category;
  @Allow()
  content: string;
  @IsBoolean()
  @Allow()
  archived: boolean = false;

  constructor(partial: Partial<Note>) {
    Object.assign(this, partial);
  }
}
