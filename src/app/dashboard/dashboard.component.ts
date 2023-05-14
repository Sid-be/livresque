import { User } from './../shared/user';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:any
  constructor(private auth:AuthServiceService) { }

  ngOnInit(): void {
    this.auth.getAllUsers().subscribe((data=>{this.users=data}))
  }

  
   
 

}
