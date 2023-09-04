import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../shared/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthServiceService , private router:Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        response => {
          
          this.router.navigate(['']);
        },
        error => {
          // handle error
        }
      );
  }

}