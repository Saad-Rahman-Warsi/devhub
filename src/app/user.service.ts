import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { User } from './model/User';
import { Observable, throwError } from 'rxjs'

import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string="http://localhost:8500/users";
  jsonuser:any;
  users:any;
  constructor(private http: HttpClient) { }

  getEmployeeById():Observable<User[]>
  {
    
    return this.http.get<User[]>(this.url).pipe(catchError(this.errorhandler))//.subscribe(data => this.users = data )    
    
    /*var user:User={"password":"","userid":-1,"username":""};
    for (let i of this.users)
    {
       if (i.userid==userid)
       {
        user=i;
       }
    }
    return user;*/
  }

  errorhandler(error: HttpErrorResponse)
  {
      return throwError(error.message || "server error");
      
  }


}
