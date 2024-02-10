import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [

    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'welcome/:name',component:WelcomeComponent},
    {path:'todo',component:ListTodosComponent},
   // {path:'logout',component:LogoutComponent},
    {path:'**',component:ErrorComponent}
    


];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }