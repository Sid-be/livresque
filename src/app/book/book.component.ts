import { Component } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { CrudService } from '../shared/crud.service';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
id: string;
book:any;
rating=3;
favoris:boolean=false
  constructor(private actRoute: ActivatedRoute,
    private router: Router,private crudService:CrudService,private books:BooksService) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.crudService.GetOneBook(this.id).subscribe((data)=>{this.book=data; this.favoris=data.favoris;
    
      });
 
    
  
  }
}
