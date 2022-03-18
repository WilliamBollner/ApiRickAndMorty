import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCharacterComponent } from './components/detail-character/detail-character.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';

const routes: Routes = [
  {path: 'characters', component: ListCharactersComponent},
  {path: 'characters/:name', component: DetailCharacterComponent},
  {path: 'characters/:img', component: DetailCharacterComponent},
  {path: '', redirectTo: '/characters', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
