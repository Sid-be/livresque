import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable ,of} from 'rxjs';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { JwtHelperService } from "@auth0/angular-jwt";





@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  logged=false
  private baseUrl = 'http://localhost:3000/auth';
  private currentUserSubject:BehaviorSubject<string[]|null>=new BehaviorSubject<string[] | null>(null);
  private isLoggedSubject:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  constructor( private http: HttpClient, private jwtHelper: JwtHelperService) {}
  setCurrentUser(user:string[]|null){
    this.currentUserSubject.next(user)
  }
    getCurrentUser(): Observable<string[] | null> {
    return this.currentUserSubject.asObservable();
  }
  setIsLogged(logged:boolean){
    this.isLoggedSubject.next(logged)
  }
  getIsLogged(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password }).pipe(
      map(response => {
        // Sauvegarde du token d'authentification dans le stockage local
        
        
  
        const decodedToken: any = jwt_decode(response.token);
       
       
        
        localStorage.setItem('access_token', response.token);
        this.setIsLogged(true)
        
        this.setCurrentUser([email, decodedToken.name]);
       
        
  
        console.log(response);
        return response;
      })
    );
  }

  register(email: string,name:string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, { email,name, password }).pipe(
      map(response => {
       
        
        localStorage.setItem('access_token', response.token);
       
        return response;
      })
    );
  }

  logout(): void {
    // Suppression du token d'authentification du stockage local
    localStorage.removeItem('access_token');
    this.setIsLogged(false)
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
  getToken() {

    
    const token = localStorage.getItem('access_token');
    return token;
  }
  public isAuthenticated(): Observable<boolean> {
   
    this.setIsLogged(!this.jwtHelper.isTokenExpired(this.getToken()))
    return this.getIsLogged()
  }

/* isLoggedOut() {
    return !this.isLoggedIn();
} */


  //  let auth=false
 // auth= this.getCurrentUser().subscribe(user=>{user?true:false})
  //return this.auth
  //}
  
}