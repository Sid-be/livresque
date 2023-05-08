import { Component,OnInit, ElementRef, AfterViewInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksService } from './books.service';
import { Book } from './livres';
import { map,tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { state,style,trigger,animate,transition  } from '@angular/animations';
import { AuthServiceService } from './auth-service.service';
import { MatMenuTrigger } from '@angular/material/menu';

import { switchMap, of, catchError } from 'rxjs';

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

export class AppComponent implements AfterViewInit {
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;
  @ViewChild('menuButton') menuButton: ElementRef;
  email: string;
  name:string;
  password: string;
  confirmPassword: string;
  menuState:boolean=true;
  livre:Book;
  ngAfterViewInit() {
    this.menuTrigger.menuClosed.subscribe(() => {
      this.menuButton.nativeElement.focus();
    });
  }
  onDocumentClick(event: MouseEvent) {
    if (!this.menuTrigger.menuOpen && !this.menuButton.nativeElement.contains(event.target)) {
      return;
    }

    if (!this.eref.nativeElement.contains(event.target)) {
      this.menuTrigger.closeMenu();
    }
  }
  
  listItemAnimationState: 'default' | 'active' = 'active';
  constructor( public books:BooksService,private router: Router,private authService: AuthServiceService,private eref: ElementRef){
    
  
  }

  ngOnInit() {
   
   

 
  
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
isLoggedIn=this.authService.isAuthenticated();
logout(){
  this.authService.logout();
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


