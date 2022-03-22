import { Origin } from './origin';
export class Character {
id?: string;
name?: string;
status?: string;
species?: string;
type?: string;
gender?: string;
origin?: Origin;
location?: Location;
image?: string;
episodes?: [];
url?: string;
created?: string;


constructor(object: Partial<Character>){
  Object.assign(this, object);
}

}
