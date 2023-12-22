import { Component, Input } from '@angular/core';
import {Question} from '../model/Question'
import { Answer } from '../model/Answer';

import {UserService} from '../user.service';
import { User } from '../model/User';
import { SignupService } from '../signup.service';
import { GetserviceService } from '../getservice.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PostqnaService } from '../postqna.service';

@Component({
  selector: 'app-questionanswer',
  templateUrl: './questionanswer.component.html',
  styleUrls: ['./questionanswer.component.css']
})
export class QuestionanswerComponent {
    @Input()
    question:Question={'questionid':-1,'questiontitle':'','questiondescription':'','askedby':'',answers:[]};

    questionid:any;
    userid:any;
    toggle:Boolean=false;
    showpost:Boolean=false;
    view:Answer[]=[];
    error:any;
    users:any;

    showanswer()
    {
       if (this.toggle==true)
       {
        this.toggle=false;
        this.view=[];
       }
       else
       {
         this.toggle=true;
         this.view=this.question.answers;
       }
    }

   

    

    cancelanswer()
    {
      this.showpost=false;
    }

    constructor(private service:GetserviceService,private postservice:PostqnaService,private route:ActivatedRoute,private router:Router)
     {
      
     }

     ngOnInit()
     {
      this.route.paramMap.subscribe((params: ParamMap)=> {
        this.questionid=params.get('questionid')
        this.userid=params.get('userid')
      })
       this.service.getAnswersById(this.questionid).subscribe(data => this.view=data, error => this.error);
       this.service.getQuestionByQuestionId(this.questionid).subscribe(data => this.question=data, error => this.error);
       this.service.getEmployees().subscribe(data=> this.users=data)
     }

     post(answer:string)
    {   
      this.postservice.saveAnswer(answer,this.questionid,this.userid).subscribe((response:any)=>{
        console.log(response);
        this.service.getAnswersById(this.questionid).subscribe(data => this.view=data, error => this.error);      
       })
    }
}
