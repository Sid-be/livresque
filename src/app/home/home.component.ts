import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Book } from '../livres';
import { Router } from '@angular/router';
import { HostBinding } from '@angular/core';
import { interval, of } from 'rxjs';
import { concatMap, mergeMap, delay, exhaustMap, map, switchMap, take, tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
lastBook:any
booksList:any
id:any
  constructor(private books:CrudService,private router: Router) { }

 
  ngOnInit() {
    this.getLatestBooks();
   
  }



 
  openBook(id){
   this.id=id;
    this.router.navigate(['edit', this.id]);
  }
  getLatestBooks() {
    this.books.GetLastThree().subscribe(
      {next:data => {this.booksList = data;
        console.log(this.booksList)
      },
        error:error => console.error(error)}
      
      
    );
    
  }
 
}
  

