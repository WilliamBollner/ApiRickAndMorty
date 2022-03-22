import { Character } from './../../models/character';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiRickService } from 'src/app/services/api-rick.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {

  listCharacters$ = new Subject<Character[]>();

  urlImg: string = "https://rickandmortyapi.com/api/character/avatar";

  constructor(private route: ActivatedRoute,
    private ApiRickService: ApiRickService) { }

  ngOnInit(): void {
    this.ApiRickService.getListCharacters()
    .subscribe(
      (response) => {
        this.listCharacters$.next(response.results);
      }
      );
  }

}
