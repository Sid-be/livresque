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
private currentUserSubject:BehaviorSubject<string[]|null>=new BehaviorSubject<string[] | null>(null);
private isLoggedSubject:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {}
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
        const expirationDate= new Date(decodedToken.exp*1000)
  
        localStorage.setItem('access_token', response.token);
        localStorage.setItem("expires_at", JSON.stringify(expirationDate));
        this.setCurrentUser([email, decodedToken.name]);
        this.setIsLogged(true);
  
        console.log(response);
        return response;
      })
    );
  }

  register(email: string,name:string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, { email,name, password }).pipe(
      map(response => {
        const expiresIn = response.expiresIn; // Durée en secondes
        const expiresAt = new Date();
        expiresAt.setSeconds(expiresAt.getSeconds() + expiresIn);
        
        localStorage.setItem('access_token', response.token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.getTime()));
        return response;
      })
    );
  }

  logout(): void {
    // Suppression du token d'authentification du stockage local
    localStorage.removeItem('access_token');
    localStorage.removeItem("expires_at");
    this.setCurrentUser(null);
    this.setIsLogged(false);
    
 
    
  }
  getAllUsers():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`).pipe(
      map(response => {
        // Sauvegarde du token d'authentification dans le stockage local
       
        return response;
      })
    );
  }

  public isLoggedIn() {
    const currentDateTime = new Date();
    const expirationDate = this.getExpiration();
    const isLoggedIn = expirationDate && currentDateTime < expirationDate;

    
  }

/* isLoggedOut() {
    return !this.isLoggedIn();
} */

getExpiration() {
  const expiration = localStorage.getItem("expires_at");

  if (expiration) {
    const expiresAt = new Date(JSON.parse(expiration));
    console.log('Expiration Date:', expiresAt); 
    return expiresAt;
  } else {
    return null; // Ou renvoie false si tu préfères, cela dépend de ton cas d'utilisation.
  }
}
  //  let auth=false
 // auth= this.getCurrentUser().subscribe(user=>{user?true:false})
  //return this.auth
  //}
  
}