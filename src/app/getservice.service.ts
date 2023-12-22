import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { User } from './model/User';
import { Observable, throwError } from 'rxjs'

import { catchError } from 'rxjs';
import { Team } from './model/Team';
import { Question } from './model/Question';
import { Answer } from './model/Answer';

@Injectable({
  providedIn: 'root'
})
export class GetserviceService {

  urlallemp: string="http://localhost:8500/users";
  urlteam:string="http://localhost:8500/teams";
  urlqna:string="http://localhost:8500/qna";
  urlans:string="http://localhost:8500/ans"
  urlquesid:string="http://localhost:8500/quesbyid"
  jsonuser:any;

  constructor(private http: HttpClient) { }

  getEmployees()
  {
    //console.log(this.http.get(this.url));
    return this.http.get<User[]>(this.urlallemp).pipe(catchError(this.errorhandler))
  }

  getEmployeeById(id:number)
  {
      var url=this.urlallemp+"/"+id.toString();
      return this.http.get<User>(url).pipe(catchError(this.errorhandler))
  }

  getTeams()
  {
    return this.http.get<Team[]>(this.urlteam).pipe(catchError(this.errorhandler))
  }

  getTeamsById(id:number)
  {
    var url=this.urlteam+"/"+id.toString();
    return this.http.get<Team[]>(url).pipe(catchError(this.errorhandler))
  }

  getQuestionsById(id:number)
  {
    var url=this.urlqna+"/"+id.toString()
    return this.http.get<Question[]>(url).pipe(catchError(this.errorhandler))
  }

  getQuestionByQuestionId(id:number)
  {
    var url=this.urlquesid+"/"+id.toString()
    return this.http.get<Question>(url).pipe(catchError(this.errorhandler))
  }

  getAnswersById(id:number)
  {
    var url=this.urlans+"/"+id.toString()
    return this.http.get<Answer[]>(url).pipe(catchError(this.errorhandler))
  }

  errorhandler(error: HttpErrorResponse)
  {
      return throwError(error.message || "server error");
      
  }
}
