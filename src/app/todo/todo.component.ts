import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import {ToDo} from '../model/todo.model';
import { FormGroup, Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoservice:TodoService,private formBuilder:FormBuilder) { }
form:FormGroup;
  ngOnInit() {
    this.form=this.formBuilder.group({
      todoname: ['',Validators.required]
    });
    this.get();
  }
  todoArray=[];
  todo;
  array:ToDo[];
  addToDo(value){
    console.log("add to do ", this.form.value);
    this.todoservice.addtoDo(this.form.value)
    .subscribe( data => {
      this.todoArray.push(data);
      console.log('onsubmit 1',this.todoArray)
    });
  
  }
  //deleting data
  deleteItem(todo){
this.todoservice.deletetodo(todo)
    .subscribe( data => {
      console.log('onsubmit ',data)
    });
  }
  
// submit Form
todoSubmit(value:any){
  if(value.toDo!==""){
    console.log(this.form.value)
    this.todoservice.addtoDo(this.form.value)
      this.todoArray.push(this.form.value.todoname);
 }else{
   alert('Field required **')
 }
}
//geting data
public get(){
this.todoservice.gettodo()
.subscribe( (data :ToDo[])=>{
  this.array=data;
console.log('get',this.array[1].todoname);
});}

log(text){
  console.log(text);
}
}
