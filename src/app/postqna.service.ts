import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders,HttpParams } from '@angular/common/http'
import { User } from './model/User';
import { Observable, throwError } from 'rxjs'

import { catchError } from 'rxjs';
import { Team } from './model/Team';
import { Question } from './model/Question';

@Injectable({
  providedIn: 'root'
})
export class PostqnaService {

  url: string="http://localhost:8500/ques/";
  urlpostans: string="http://localhost:8500/postans/";
  jsonuser:any;
  users:any;

  httpParams: HttpParams = new HttpParams();

  constructor(private http: HttpClient) { }

  saveQuestions(questiontitle:string,questiondescription:string,team:string,userid:number):Observable<any>
  {
   // const headers = new HttpHeaders().set();
     return this.http.post<any>(this.url,{"questiontitle":questiontitle,"questiondescription":questiondescription,"team":team,"userid":userid});    
    
   
  }

  saveAnswer(answer:string,questionid:number,userid:number):Observable<any>
  {
   // const headers = new HttpHeaders().set();
     return this.http.post<any>(this.urlpostans+questionid.toString(),{"answer":answer,"answeredby":userid});    
    
   
  }

  errorhandler(error: HttpErrorResponse)
  {
      return throwError(error.message || "server error");
      
  }


}

