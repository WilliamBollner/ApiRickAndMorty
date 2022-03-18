import { ResponseLink } from './response-link';
export class ListCharacters {
  count?: number;
  pages?: number;
  next?: string;
  prev?: string;
  results: ResponseLink[] = [];

  constructor(object: Partial<ListCharacters>){
    Object.assign(this, object);
  }
}
