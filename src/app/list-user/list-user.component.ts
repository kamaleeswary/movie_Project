import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import { UserService } from '../user.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
users:User[];
  constructor(private _userService: UserService) {
}

  ngOnInit() {
    console.log('ngonit')
    this.getUsers();
  }
public getUsers(){
  console.log('inside getusers')
  this._userService.getUsers().subscribe((data: User[]) => {
    this.users = data ;
  })
}
}
