import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import {HomeComponent} from './home/home.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  {path:'signup' ,component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'todo' ,component:TodoComponent},
  { path: '', component:HomeComponent },
  { path: 'home', component: LoginComponent},
  {path:'list',component:ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
