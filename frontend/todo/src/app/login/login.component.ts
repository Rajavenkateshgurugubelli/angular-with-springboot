import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username:string=''
  password=''
  errorMessage='Invalid Credentials'
  invalidLogin=false
  constructor(){

  }

  ngOnInit(): void {
    
  }
  login(){
    if(this.username==='user' && this.password ==='user'){
      this.invalidLogin=false
      console.log('logged in')
    }
    else{
      this.invalidLogin=true
      console.log('log in failed')
    }
    console.log(this.username)

  }

}
