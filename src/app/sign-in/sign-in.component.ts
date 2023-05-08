import { Component, OnInit } from '@angular/core';

import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        response => {
          console.log(response.user_id)
        },
        error => {
          // handle error
        }
      );
  }

}