import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { EditComponent } from './edit/edit.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreComponent } from './genre/genre.component';
import { FavorisComponent } from './favoris/favoris.component';


const routes: Routes = [
 
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ajout', component: AddbookComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'genre/:id', component: GenreComponent },
  { path: 'favoris', component: FavorisComponent },
  { path: 'livres', component: BooklistComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
