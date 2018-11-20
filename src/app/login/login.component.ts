import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {User} from '../model/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:User[];
 
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
 constructor(private router: Router,private _userService: UserService) { }

 
  gotoSignUp(password,email){
    let flag=false;
    console.log('email',email,"password",password,"user",this.users)
    for(let i=0;i<this.users.length;i++){
    if(email==this.users[i].FirstName && password == this.users[i].Password){
      console.log("inside for ",this.users[i].FirstName)
      flag=true;
  }  };
    if(flag)
    {
      console.log("inside flag true")
      this.router.navigateByUrl('/todo');
    }
    else{
      alert("incorrct UserName / Password (New Users Please Register)")
    }
  }


  addUser(): void {
    this.router.navigate(['signup']);
  };
}
