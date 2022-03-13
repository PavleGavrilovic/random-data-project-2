import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userArray:{}[]=[];
  singleUserData;

  constructor(private usersService: UsersService){}

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((response)=>{
      for(let i=0;i<response.results.length;i++){
        this.userArray.push(response.results[i])
      }
      console.log(this.userArray)
    })
  }

  showData(data){
    this.usersService.singleData.next(data);
  }
}
