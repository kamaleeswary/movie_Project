import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {TodoComponent} from './todo/todo.component';
import { ToDo } from './model/todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  API_URL = 'http://localhost:3001';
  constructor(private httpClient: HttpClient) { }
  gettodo() {
      return this.httpClient.get(`${this.API_URL}/todo`);
  }
  addtoDo(todos:ToDo){
console.log("inside user in service ",todos)
    return this.httpClient.post(`${this.API_URL}/todo/`,todos);
  }
  deletetodo(val){
    console.log("deleting ",val)
    return this.httpClient.delete(`${this.API_URL}/todo/${val}`);
  }
}
