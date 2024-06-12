import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { AuthModel } from '../../types/userType';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
    
   }

  private userInfo$ = new BehaviorSubject<string>('');

  get userInfo() { 
    return this.userInfo$.asObservable();
  }



  
  

  registerUser(username: string, password: string) { 
    console.log('submit from service')
    
    const authData: AuthModel = {username, password,}
    
    this.http.post('http://localhost:3000/register', authData).subscribe(res => { 
      console.log(res)
    })
    
  }
  loginUser(username: string, password: string) { 
    
    const authData: AuthModel = { username, password };

    this.http.post<{username:string, token: string}>('http://localhost:3000/login', authData)
      .subscribe(res => { 
        console.log(res);
        console.log(res.username)
        console.log(typeof res.username)

        this.userInfo$.next(res.username);
        // this.token$.next(res.token)
      })

  }
}
