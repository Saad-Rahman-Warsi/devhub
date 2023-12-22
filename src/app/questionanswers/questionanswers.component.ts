import { Component,Input } from '@angular/core';
import { Question } from '../model/Question';
import {UserService} from '../user.service';
import { User } from '../model/User';
import { SignupService } from '../signup.service';
import { GetserviceService } from '../getservice.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PostqnaService } from '../postqna.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-questionanswers',
  templateUrl: './questionanswers.component.html',
  styleUrls: ['./questionanswers.component.css']
})
export class QuestionanswersComponent {
     users:any;
     showform:Boolean=false;
     error:any;
     questions:any;
     userId:any;
     team:any;
     @Input()
     postedquestion:any;
     

     constructor(private service:GetserviceService,private postservice:PostqnaService,private route:ActivatedRoute,private router:Router)
     {
      
     }

     ngOnInit()
     {
      this.route.paramMap.subscribe((params: ParamMap)=> {
        this.userId=params.get('userid')
        this.team=params.get('team')
      })
       this.service.getQuestionsById(this.userId).subscribe(data => this.questions=data, error => this.error);
       this.service.getEmployees().subscribe(data=>this.users=data)
       console.log(this.users); 
      
     }

     showquesform()
     {
         this.showform=true;
     }

    

     cancelanswer()
     {
         this.showform=false;
     }
     navigatequestion(question:Question)
     {
       this.router.navigate(['/dashboard',{'questionid':question.questionid,'userid':this.userId,'component':'answers'}])
     }
     
    }


