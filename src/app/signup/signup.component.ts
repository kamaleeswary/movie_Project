import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
// import {first} from "rxjs/operators";
import {Router} from "@angular/router"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  addForm: FormGroup;

  ngOnInit() {
   this.addForm = this.formBuilder.group({
      Email: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Password: ['', Validators.required]
    });
    console.log("add email ",this.addForm.value)

  }

  onSubmit() {
    this.userService.addUsers(this.addForm.value)
      .subscribe( data => {
        console.log('onsubmit',data)
        this.router.navigate(['list']);
      });
  }
alert()
{
  alert("Registerd Succesfully")
}
 
}
