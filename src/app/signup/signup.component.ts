import { Component,Input } from '@angular/core';
import { SignupService } from '../signup.service';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    users:any;
    error:any;
    imagepath:any="../../assets/img/img1.jpg"
    signuperror:any;

    constructor(private signupservice: SignupService,private route:ActivatedRoute,private router:Router)
    {
        
    }

    ngOnInit()
    {   
        this.signupservice.getEmployees().subscribe(data => this.users = data , error=> this.error=error);
        console.log ("signup class")
        console.log(this.users)
      }

    signup(usernameinput:string,passwordinput:string)
    {
      
      //this.router.navigate(['/dashboard',{'userid':0}])
      var user:any;
        for (let user of this.users)
        {
          console.log(user);
          console.log(user.username);
            console.log(usernameinput);
            console.log(user.password);
            console.log(passwordinput);
           if ( user.username==usernameinput && user.password==passwordinput)
           {
            
            this.router.navigate(['/dashboard',{'userid':user.userid}])
            NavbarComponent.signuplit=false;
            NavbarComponent.dashboardlit=true;
            NavbarComponent.userId=user.userid;
           }
           else
           {
              this.signuperror="incorrect username or password";
           }
       }
      }
    }
  
