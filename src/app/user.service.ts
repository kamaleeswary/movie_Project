import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:3001';
    constructor(private httpClient: HttpClient) { }
    getUsers() {
        return this.httpClient.get(`${this.API_URL}/users`);
    }
    addUsers(user:User){
console.log("inside user ",user)
      return this.httpClient.post(`${this.API_URL}/users/`,user);
    }
}
