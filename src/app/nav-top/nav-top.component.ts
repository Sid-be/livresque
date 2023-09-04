import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {

  constructor(private router: Router, public book:BooksService) { }
  isDropdownOpen = false;
  ngOnInit(): void {
    
  }
  showlivreservice(){
    console.log(this.book.livre)
  }
  toggleDropdown(event:Event) {
    event.preventDefault
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toLogin(){
    this.router.navigate(['login',])}
}
