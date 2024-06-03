import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { AuthModel } from '../../types/userType';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router : Router) { }

  loginUser(username:string, password:string) { 

  }

  registerUser(username: string, password: string) { 
    console.log('submit from service')

    const authData: AuthModel = {username, password,}
    
    this.http.post('http://localhost:3000/register', authData).subscribe(res => { 
      console.log(res)
    })

  }
}
