import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { User } from './model/User';
import { Observable, throwError } from 'rxjs'

import { catchError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url: string="http://localhost:8500/users";
  jsonuser:any;

  constructor(private http: HttpClient) { }

  getEmployees()
  {
    //console.log(this.http.get(this.url));
    return this.http.get<User[]>(this.url).pipe(catchError(this.errorhandler))
  }

  errorhandler(error: HttpErrorResponse)
  {
      return throwError(error.message || "server error");
      
  }
}
