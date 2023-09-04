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
n:number=4
currentUser: string | null;
currentUserSubscription: Subscription;
screeWidth:number|null;
  constructor(private books:CrudService,private auth:AuthServiceService,private router: Router) { }

 
  ngOnInit() {
    this.screenSize()
    this.getLatestBooks();
    this.currentUserSubscription=this.auth.getCurrentUser().subscribe((user)=>{
    console.log(user)
      this.getLatestBooks() }
     )


   
   
  }

  ngOnDestroy(): void {
    this.currentUserSubscription?.unsubscribe();
  }
  bookByGenre(genre){
    this.genre=genre;
     this.router.navigate(['genre', this.id]);
   }
 
  openBook(id){
   this.id=id;
    this.router.navigate(['book', this.id]);
  }
  getLatestBooks() {
    this.books.GetBooks().subscribe(
      {next:data => {this.booksList = data;
        console.log(this.booksList)
      },
        error:error => console.error(error)}
      
      
    );
    
  }
  screenSize():number{
    this.screeWidth=window.innerWidth;
    if(this.screeWidth<=390){
      
      return (this.n=3)
    }
    return this.n
  }
  
 
 
}
  

