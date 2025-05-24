import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:UserClass[];

  constructor(private service: DataService){}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(result=>this.users=result);
  }

}
