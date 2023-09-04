import { CrudService } from './../shared/crud.service';
import { Component, OnInit } from '@angular/core';

import { BooksService } from '../shared/books.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute,
    private router: Router,private crudService:CrudService,private books:BooksService) { }
id:any;
genre:any;

booksList:any
  ngOnInit(): void {
     this.actRoute.paramMap.subscribe(params => {
      this.genre = params.get('genre');
      // Mettez à jour le contenu en fonction du nouveau paramètre 'genre'
      this.getGenre()
    });
    
   
   //this.crudService.GetBookList().subscribe((data)=>{this.genre=data;console.log(this.genre)})
   
   
    
    
  }
  getGenre(){
  this.crudService.GetBooksByGenre(this.genre).subscribe({next:data => {this.booksList = data;
      console.log(this.booksList)
    },
      error:error => console.error(error)})
}
/* genrefilter(genres){
  return this.genre.filter(x=>x.info.genre==genres)
} */
  openBook(id){
   
     this.router.navigate(['edit', id]);
   }
}
