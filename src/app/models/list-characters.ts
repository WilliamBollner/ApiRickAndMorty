import { Character } from './character';
export class ListCharacters {
  count?: number;
  pages?: number;
  next?: string;
  prev?: string;
  results: Character[] = [];

  constructor(object: Partial<ListCharacters>){
    Object.assign(this, object);
  }
}
