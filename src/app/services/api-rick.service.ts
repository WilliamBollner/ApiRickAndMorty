import { Character } from './../models/character';
import { environment } from './../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListCharacters } from '../models/list-characters';

@Injectable({
  providedIn: 'root'
})
export class ApiRickService {

  constructor(private http: HttpClient) { }


  getListCharacters(){
    let url:string = `${environment.urlCharacter}/character`;
    return this.http.get<ListCharacters>(url);

  }

  getCharacterById(id: string){
    let url: string = `${environment.urlCharacter}/character/${id}`;
    return this.http.get<Character>(url);

  }
}
