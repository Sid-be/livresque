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
  
  isLoggedIn: boolean = false;
  isbnID:string='';
  isbnForm = new FormControl('', [
    Validators.required,
    Validators.pattern('/^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/'),
  ]);

  
  listItemAnimationState: 'default' | 'active' = 'active';
  constructor( public books:BooksService,private router: Router,public authService: AuthServiceService,private eref: ElementRef){
    
  
  }
 
  stopPropagation(event: Event) {
    event.stopPropagation();
  }
  

  ngOnInit() {
  
 
  

 
  
} 



}


