
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/books.service';
import { Book } from '../livres';
import { CrudService } from '../shared/crud.service';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of ,map,Subscription,skip} from 'rxjs';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddbookComponent implements OnInit {
  private notificationSubscription: Subscription;
  constructor(
    private books: BooksService,
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private toast: HotToastService
  ) {
   
   
  }
  form:FormGroup;
  livre: Book;
  isbnID: string;
  starRating = 0;
  dateTime: Date;
  newLivre: any;
  imageSrc: any;
  btnStyle: string = 'hide';
  resume: any;
  genresList :string[]= ['science-fiction', 'polar', 'fantaisie', 'Roman'];
 
  
 

  ngOnInit(): void {
   
  }
  isbnForm = new FormControl('', [
    Validators.required,
    Validators.pattern('/^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/'),
  ]);
  title=new FormControl();
  publisher=new FormControl();
  authors= new FormControl();
  publiDate=new FormControl();
  image = new FormControl('');
  synopsis = new FormControl();
  favoris = new FormControl();
  
  genres=new  FormControl();
  



  


  onSubmit() {
    this.isbnID = this.isbnForm.value;
    this.getLivre();
  }
  getnewImage(): Observable<any> | any {
    if (this.livre != null) {
      return of(this.livre);
    }
  }
  onUpdate() {
  /*   this.getnewImage().subscribe((data) => {
      this.newLivre = data;
     console.log(this.newLivre)
    });
    this.livre.image = this.image.value;
   
    if(!this.imageSrc){
      this.imageSrc="/src/assets/img-placeholder.svg"

    } */
    https://m.media-amazon.com/images/I/511BXv5KYYL._SX307_BO1,204,203,200_.jpg
   if(this.image && this.image.value){
    this.imageSrc = this.image.value; // Update imageSrc with the new value
    this.image.setValue('');
  }
  }
  getLivre() {
    
    this.books.getIsbnDb(this.isbnID).subscribe((result)=>{
    
     console.log(result)
      
        this.imageSrc=result
   
     });
    
    this.books.getResume(this.isbnID).subscribe({
      next: (resume) => {
        console.log(resume)
        if(resume.totalItems!==0){
        this.resume = resume.items[0]?.volumeInfo;
        }
      },
    });
  }
  submitBookData() {
    const livre = new Book()
  
   if(this.resume){
   
  livre.title= this.resume? this.resume.title:this.title.value;
  livre.isbn=this.isbnID;
  livre.publisher=this.resume?this.resume.publisher:this.publisher.value;
  livre.publishedDate=this.resume.publishedDate;
  livre.image=this.imageSrc
  livre.synopsis=this.resume?this.resume.description:this.synopsis.value
   livre.authors=this.resume.authors;
   livre.pages=this.resume.pageCount;
   livre.langage=this.resume.language;
   livre.favoris=this.favoris.value;
   livre.genre=this.genres.value
  /*  if(this.genre){
   console.log(this.genre)
   livre.genre=this.genre  
  } */
 
this.crudService.setUserBook(livre)
    
  
this.crudService.notification$.pipe(skip(1)).subscribe((message) => {
 
  this.toast.info(message)

  })

    
   
  }
  else{
    livre.title= this.title.value;
  livre.isbn=this.isbnID;
  livre.publisher=this.publisher.value;
  livre.publishedDate=this.publiDate.value;
  livre.image=this.imageSrc
  livre.synopsis=this.synopsis.value
   livre.authors=this.authors.value;
   livre.pages=200;
   livre.langage='fr';
   livre.favoris=this.favoris.value;
   livre.genre=this.genres.value;
  
this.crudService.setUserBook(livre)


  
}
  }
 // getBookin() {
   // this.books.getIsbnDb(this.isbnID['ISBN']).subscribe((data) => {
    //  console.log(data);
   // });
    //console.log(this.livre);
 // }

  ShowInput() {
    this.btnStyle = 'show';
  }
}
