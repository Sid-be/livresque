import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { EditComponent } from './edit/edit.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreComponent } from './genre/genre.component';
import { FavorisComponent } from './favoris/favoris.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
 
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'ajout/:id', component: AddbookComponent },
  { path: 'add', component: AddbookComponent },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'genre/:genre', component: GenreComponent },
  { path: 'favoris', component: FavorisComponent },
  { path: 'livres', component: BooklistComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
