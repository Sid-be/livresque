import { Book } from './../livres';
import { BooksService } from '../shared/books.service';
import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
livre=this.book.livre;
  constructor(private matDialog:MatDialog,public book:BooksService) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.matDialog.open(DialogComponent,{
      data:this.book.livre
    })

  }

}
