import { Book } from './../livres';
import { Injectable } from '@angular/core';
import { map, Observable, BehaviorSubject } from 'rxjs';

import { HttpClient,HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgZone, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';


@Injectable({
  providedIn: 'root',
})

export class CrudService {
  private notificationSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public notification$ = this.notificationSubject.asObservable();
  userData: any; // Save logged in user data
  uid: any;
  bookRef: any;
  lasBooks: any[];
  books:any;
  apiUrl = 'http://localhost:3000/api';
  constructor(private http:HttpClient,
    

    public router: Router,
    public ngZone: NgZone,
    private toast: HotToastService
  ) 
  {
   
  }
  

  setUserBook(book: Book|any) {
         return this.http.post<Book>(
        "http://localhost:3000/api/book",
        book,{observe:'response'})
        .subscribe(
          (response: HttpResponse<any>) => {
            console.log(response);
            if (response.status === 201) {
              this.toast.success('success');
            } else if (response.status === 400) {
              this.toast.error('error');
            } else if (response.status === 404) {
              this.toast.warning('Avertissement');
            } else {
              this.toast.info('info');
            }
          },
          (error) => {
            this.toast.error('error');
          }
        );
      
  }
   GetBooks() : Observable<any>{
    
      return this.http.get(`${this.apiUrl}/book`);
  }
  GetOneBook(id) : Observable<Book>{
    
    return this.http.get<Book>(`${this.apiUrl}/book/${id}`);
}
UpdateBook(newBook:Book,isbn) : Observable<any>{
    
  
  return this.http.put<Book>(`${this.apiUrl}/book/${isbn}`,
  newBook);
}
DeleteBook(isbn) : Observable<any>{
    
  
  return this.http.delete(`${this.apiUrl}/book/${isbn}`);
}
 
   
   
  
}
