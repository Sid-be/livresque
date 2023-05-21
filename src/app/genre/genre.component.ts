import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
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
bookid:any;
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
   
   //this.crudService.GetBookList().subscribe((data)=>{this.genre=data;console.log(this.genre)})
   
 
    
    
  }
/* genrefilter(genres){
  return this.genre.filter(x=>x.info.genre==genres)
} */
  openBook(id){
    this.bookid=id;
     this.router.navigate(['edit', this.id]);
   }
}
