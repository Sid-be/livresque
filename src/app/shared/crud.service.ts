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
   GetLastThree() : Observable<any>{
    
      return this.http.get(`${this.apiUrl}/books/latest`);
  }
   
   
  /* GetGenre(id) {
    let snapshot = this.afs
      .collection('books', (ref) => ref.where('genre','==', "science-fiction"))
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ info: c.payload.doc.data()['book'] }))
        )
      );
      console.log(snapshot)
      return snapshot;
    }
  GetBookList() {
    let snapshot = this.afs
      .collection('books')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ info: c.payload.doc.data()['book'] }))
        )
      );
      this.books=snapshot;
    return snapshot;
  }
 
  DeleteBook(id) {
    const bookRef = this.afs.collection('books');
    bookRef.doc(id).delete();
  }
  GetBook(id: string) {
    return this.afs.collection('books').doc(id).valueChanges();
    //return this.bookRef;
    
  }
  UpdateBook(book: Book, id) {
    const bookRef = this.afs
      
      .collection('book')
      .doc(id)
      .update(book);
  } */
}
