import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl = 'http://localhost:3000/auth';
private currentUserSubject:BehaviorSubject<string|null>=new BehaviorSubject<string | null>(null);
  constructor(private http: HttpClient) {}
  setCurrentUser(user:string|null){
    this.currentUserSubject.next(user)
  }
    getCurrentUser(): Observable<string | null> {
    return this.currentUserSubject.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password }).pipe(
      map(response => {
        // Sauvegarde du token d'authentification dans le stockage local
        localStorage.setItem('access_token', response.token);
        this.setCurrentUser(email);
      
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
    this.setCurrentUser(null);
    
 
    
  }
  getAllUsers():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`).pipe(
      map(response => {
        // Sauvegarde du token d'authentification dans le stockage local
       
        return response;
      })
    );
  }

 isAuthenticated() {
  const token=localStorage.getItem('access_token');
  const decodedToken:any=jwt_decode(token);
  const dateNow=Date.now()/1000
  if(token && (decodedToken.exp>dateNow)){
  return true
}
return false
 }
  //  let auth=false
 // auth= this.getCurrentUser().subscribe(user=>{user?true:false})
  //return this.auth
  //}
}