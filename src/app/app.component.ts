import { Component,OnInit, ElementRef, AfterViewInit,ViewChild, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksService } from './shared/books.service';
import { Book } from './livres';

import { Router } from '@angular/router';
import { state,style,trigger,animate,transition  } from '@angular/animations';
import { AuthServiceService } from './shared/auth-service.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { FormControl,Validators } from '@angular/forms';


import {
  Observable

} from 'rxjs';
import { animation } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
  trigger('listItem', [
    state('default', style({
      width: '11em',
   
  
      
    })),
    state('active', style({
     
      width: '0',
      
      
     
    })),
  
    transition('default <=> active', [
      animate('400ms ease-in-out')
    ]),
    
  ])
]
})

export class AppComponent implements OnInit {
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
  email: string="";
  name:string;
  nickname:string=''
  password: string;
  confirmPassword: string;
  menuState:boolean=true;
  livre:Book;
  isDropdownOpen = false;
  isLoggedIn: boolean = false;
  isbnID:string='';
  isbnForm = new FormControl('', [
    Validators.required,
    Validators.pattern('/^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/'),
  ]);

  
  listItemAnimationState: 'default' | 'active' = 'active';
  constructor( public books:BooksService,private router: Router,private authService: AuthServiceService,private eref: ElementRef){
    
  
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  stopPropagation(event: Event) {
    event.stopPropagation();
  }
  closeDropdown() {
    this.isDropdownOpen = false;
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((user)=>{if(user){this.nickname=user[1]}})
    this.isLoggedIn=this.authService.isAuthenticated()
  

 
  
} 
onSubmit() {
  this.isbnID = this.isbnForm.value;
  this.redirectToAddBook(this.isbnID)
}
register(): void {
  if (this.password !== this.confirmPassword) {
    alert('Les mots de passe ne correspondent pas');
    return;
  }
  this.authService.register(this.email,this.name, this.password)
    .subscribe(
      response => {
        alert('Inscription réussie!');
      },
      error => {
        console.log(error);
        alert('Une erreur s\'est produite lors de l\'inscription');
      }
    );
}
login(): void {
 
  
  this.authService.login(this.email, this.password)
    .subscribe(
      response => {
         this.isLoggedIn=this.authService.isAuthenticated()
       
        
      },
      error => {
        // handle error
      }
    );
    this.menuTrigger.closeMenu();
}


logout(){
  this.authService.logout();
  this.isLoggedIn=false;
  

 
}
redirectToAddBook(isbn:string){
  console.log(isbn)
  this.router.navigate(['ajout', this.isbnID]);
}
onListItemMouseEnter() {
  this.listItemAnimationState = 'default';
  this.menuState=!this.menuState
}

onListItemMouseLeave() {
  this.listItemAnimationState = 'active';
  this.menuState=!this.menuState
}


}


