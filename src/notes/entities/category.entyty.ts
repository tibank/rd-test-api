export class Category {
  id: number;
  name: string;

  constructor(partial: Partial<Category>) {
    Object.assign(this, partial);
  }
}
