
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routes';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
