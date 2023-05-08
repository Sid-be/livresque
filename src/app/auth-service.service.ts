import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password }).pipe(
      map(response => {
        // Sauvegarde du token d'authentification dans le stockage local
        localStorage.setItem('access_token', response.token);
      
        return response;
      })
    );
  }

  register(email: string,name:string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, { email,name, password }).pipe(
      map(response => {
        // Sauvegarde du token d'authentification dans le stockage local
        
        localStorage.setItem('access_token', response.token);
        return response;
      })
    );
  }

  logout(): void {
    // Suppression du token d'authentification du stockage local
    localStorage.removeItem('access_token');
    
  }

  isAuthenticated(): boolean {
    // Vérification de la présence du token d'authentification dans le stockage local
    return localStorage.getItem('access_token') !== null;
  }
}