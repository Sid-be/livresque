import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  booksList:any[];
  id:any;
  constructor( private router: Router,private books:CrudService) { }

  ngOnInit(): void {
   
      this.getLatestBooks();
 
     
  }
   openBook(id){
    this.id=id;
     this.router.navigate(['edit', this.id]);
   } 
  
  getLatestBooks() {
    this.books.GetLastThree().subscribe(
      data => this.booksList = data,
      error => console.error(error)
    );
  }
}

