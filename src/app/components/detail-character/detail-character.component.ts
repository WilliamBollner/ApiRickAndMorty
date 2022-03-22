
import { ApiRickService } from 'src/app/services/api-rick.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from './../../models/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss'],
})
export class DetailCharacterComponent implements OnInit {

  characterObj: Character = new Character({});

  constructor(private route: ActivatedRoute,
              private apiRickService: ApiRickService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.apiRickService.getCharacterById(id).subscribe((character) => {
        console.log(character);
        this.characterObj = character;
      });
    }
  }

}
