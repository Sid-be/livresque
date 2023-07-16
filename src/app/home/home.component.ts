import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { AuthServiceService } from '../shared/auth-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
lastBook:any
booksList:any
id:any
genre:any
currentUser: string | null;
currentUserSubscription: Subscription;
  constructor(private books:CrudService,private auth:AuthServiceService,private router: Router) { }

 
  ngOnInit() {
    this.getLatestBooks();
    this.currentUserSubscription=this.auth.getCurrentUser().subscribe((user)=>{
    console.log(user)
      this.getLatestBooks() }
     )


   
   
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }
  bookByGenre(genre){
    this.genre=genre;
     this.router.navigate(['genre', this.id]);
   }
 
  openBook(id){
   this.id=id;
    this.router.navigate(['edit', this.id]);
  }
  getLatestBooks() {
    this.books.GetBooks().subscribe(
      {next:data => {this.booksList = data;
        console.log(this.booksList)
      },
        error:error => console.error(error)}
      
      
    );
    
  }
  
 
 
}
  

