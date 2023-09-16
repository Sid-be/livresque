import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../shared/books.service';
import { AuthServiceService } from '../shared/auth-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  nickname:string='';
  logged:boolean

  constructor(private router: Router, public book:BooksService, public auth:AuthServiceService) { }
  isDropdownOpen = false;
  ngOnInit(): void {
this.auth.getCurrentUser().subscribe((user)=>{if(user){this.nickname=user[1]}});
this.auth.isAuthenticated().subscribe(logged=>this.logged=logged);
  
 

  }
  showlivreservice(){
    console.log(this.book.livre)
  }
  toggleDropdown(event:Event) {
    event.preventDefault
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toLogin(){
    this.router.navigate(['login'])}
  toRegister(){
    this.router.navigate(['register'])}
    toLogOut(){
      this.auth.logout();
      this.router.navigate(['login'])}

  }

