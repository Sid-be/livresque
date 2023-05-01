import { Observable,of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { CrudService } from '../shared/crud.service';
import { BooksService } from '../books.service';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  book:any;
  btnStyle='hide';
  starRating:number=0;
  livre:any
  imageSrc:any;
  newBook:any;
  isbnForm =new FormControl('');
  
  bookInfo:any;
  edit=false;
  image = new FormControl();
  synopsis = new FormControl();
  favoris = new FormControl();
  bookmark:false;
  constructor(private actRoute: ActivatedRoute,
    private router: Router,private crudService:CrudService,private books:BooksService) { }

  ngOnInit(): void {
 /*    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.crudService.GetBook(this.id).subscribe((data)=>{this.newBook=data;this.starRating=this.newBook?.book?.rate;  if(this.newBook?.book?.favoris){
      this.favoris.setValue(true)
     } */
     /* }); */
 
    
  
  }

  ShowInput(){
    this.btnStyle='show'
  
  }

   /*  UpdateBookData() {
      this.newBook.updatedAt=this.crudService.getTimestamp()
   
       this.crudService.setUserBook(this.newBook);
      console.log("update success ");
 
 } */
 /* onUpdate(){
  
   this.newBook.book.rate=this.starRating
   this.newBook.book.favoris=this.favoris.value;
   if(this.synopsis.touched){
   this.newBook.book.synopsis=this.synopsis.value
  }
   this.imageSrc=this.newBook.book.image
   this.newBook.updatedAt=this.crudService.getTimestamp()
   
       this.crudService.setUserBook(this.newBook);
      console.log("update success ");
   
 } */
/*  onDelete(id){
this.crudService.DeleteBook(id);

 } */
 getnewImage():Observable<any>|any{
  if(this.newBook != null) {
    return of(this.newBook)
  }
}
onSubmit(){
 
   this.newBook.book.image=this.image.value;
}


}
