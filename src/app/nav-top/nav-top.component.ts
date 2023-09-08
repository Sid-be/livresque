import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../shared/books.service';
import { AuthServiceService } from '../shared/auth-service.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  nickname:string='';
  logged:boolean=false;

  constructor(private router: Router, public book:BooksService, public auth:AuthServiceService) { }
  isDropdownOpen = false;
  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe((user)=>{if(user){this.nickname=user[1]}});
   this.auth.getIsLogged().subscribe((logged)=>{this.logged=logged; console.log(this.logged)})

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

