import { Book } from './../livres';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgZone, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  userData: any; // Save logged in user data
  uid: any;
  bookRef: any;
  lasBooks: any[];
  books:any;
  apiUrl = 'http://localhost:3000/api';
  constructor(private http:HttpClient,
    

    public router: Router,
    public ngZone: NgZone 
  ) 
  {
   
  }
  

  setUserBook(book: Book|any) {
          this.http.post<Book>(
        "http://localhost:3000/api/book",
        book)
        .subscribe(response => {
          console.log(response);
        });
      
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
