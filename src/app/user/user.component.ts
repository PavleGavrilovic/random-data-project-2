import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  singleUser;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.singleData.subscribe((data)=>{
      this.singleUser=data;
      console.log(this.singleUser);
    })
  }
}
