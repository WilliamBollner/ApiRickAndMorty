export class ResponseLink {
  name?: string;
  img?: string;
  url?: string;

  constructor(object: Partial<ResponseLink>){
    Object.assign(this, object);
  }
}
