import { Origin } from './origin';
export class Character {
id?: number;
name?: string;
status?: string;
species?: string;
type?: string;
gender?: string;
origin?: Origin;
img?: string;

constructor(object: Partial<Character>){
  Object.assign(this, object);
}

}
