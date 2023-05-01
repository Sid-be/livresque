import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksService } from './books.service';
import { Book } from './livres';
import { map,tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { state,style,trigger,animate,transition  } from '@angular/animations';

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

export class AppComponent {
  
  menuState:boolean=true;
  livre:Book;
  listItemAnimationState: 'default' | 'active' = 'active';
  constructor( public books:BooksService,private router: Router){
    
  
  }

  ngOnInit() {
   
   

 
  
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


