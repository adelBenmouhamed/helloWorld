import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeHelloComponent } from './change-hello/change-hello.component';
import { HomeHelloComponent } from './home-hello/home-hello.component';
import { GetHelloComponent } from './get-hello/get-hello.component';
import { AuthGuard } from './Guart/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path:"say-hello",component:ChangeHelloComponent ,canActivate:[AuthGuard], data : {roles : ['ADMIN']}
  },
   {
    path:"home-hello",component:HomeHelloComponent,canActivate:[AuthGuard], data : {roles : ['USER']}
  },
  {
    path:"get-hello",component:GetHelloComponent,canActivate : [AuthGuard], data : {roles : ['USER']}
  },
  {
    path:"login",component:LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
