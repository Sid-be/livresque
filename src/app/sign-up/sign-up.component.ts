import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  email: string;
  name:string;
  password: string;
  confirmPassword: string;

  constructor(private authService: AuthServiceService) { }

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

 

}