import { Component } from '@angular/core';
import { Question } from '../model/Question';
import {UserService} from '../user.service';
import { User } from '../model/User';
import { SignupService } from '../signup.service';
import { GetserviceService } from '../getservice.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PostqnaService } from '../postqna.service';
@Component({
  selector: 'app-postquestion',
  templateUrl: './postquestion.component.html',
  styleUrls: ['./postquestion.component.css']
})
export class PostquestionComponent {
  users:any;
  showform:Boolean=false;
  error:any;
  questions:any;
  userId:any;
  team:any;
  
  

  constructor(private service:GetserviceService,private postservice:PostqnaService,private route:ActivatedRoute,private router:Router)
  {
   
  }

  ngOnInit()
  {
   this.route.paramMap.subscribe((params: ParamMap)=> {
     this.userId=params.get('userid')
   })
    this.service.getQuestionsById(this.userId).subscribe(data => this.questions=data, error => this.error);
    console.log(this.users); 
   
  }

  showquesform()
  {
      this.showform=true;
  }

  post(questiontitle:any,questiondescription:any,team:string)
  {
      //var question="what is comp sc vs soft";
      this.postservice.saveQuestions(questiontitle,questiondescription,team,this.userId).subscribe((response:any)=>{
       console.log("posted!")
     });
  }

  

  cancelanswer()
  {
      this.showform=false;
  }
   
  
}
