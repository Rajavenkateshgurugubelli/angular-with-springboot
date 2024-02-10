import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username:string,password:string){
    if(username==='user' && password ==='user'){
    return true;
    }
    return false;
  }
}
