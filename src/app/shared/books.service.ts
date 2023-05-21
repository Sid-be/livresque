import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap,BehaviorSubject,map } from 'rxjs';
import { Book } from '../livres';
import { Resume } from '../resume';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor(private http:HttpClient) { }
  final:any;
  googleLivre:any
  livre:Book;
  googleback:any;
  imageSrc:string;
  headers = {
    "Content-Type": 'application/json',
    "Authorization": '48626_4b98576d5521e9a08a616cbb4f5ab7e2'
  }
  gID:any;
 
  getIsbnDb(id:any){

    return this.http.get('http://localhost:3000/api/isbn/'+id,)
    
      
  }
  getResume(id:any):Observable<Resume>{
   
    return this.http.get<Resume>('https://www.googleapis.com/books/v1/volumes?q=isbn:'+id);

  }
  
  
}


  