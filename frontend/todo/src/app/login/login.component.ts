import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username:string=''
  password=''
  constructor(){

  }

  ngOnInit(): void {
    
  }
  login(){
    console.log(this.username)

  }

}
