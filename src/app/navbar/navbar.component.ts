import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {Location} from '@angular/common'



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',],
  
})
export class NavbarComponent {

  static userId: any;
  static signuplit: Boolean;
  static qnalit: Boolean;
  static dashboardlit: Boolean;
  static prevqlit:Boolean;
  


  constructor(private route:ActivatedRoute,private router:Router,private location: Location)
   {
       NavbarComponent.userId=-1;
      NavbarComponent.signuplit=false;
      NavbarComponent.qnalit=false;
      NavbarComponent.dashboardlit=false;
      NavbarComponent.prevqlit=false;
   }

   ngOnInit()
   {
    
       this.route.paramMap.subscribe((params: ParamMap)=> {
        NavbarComponent.userId=params.get('userid')
      })
      var routeinstr=this.location.path();
      if (routeinstr=='' || routeinstr=="/signup")
      {
        NavbarComponent.signuplit=true;
      }
      else if(routeinstr.startsWith('/teams') || routeinstr.startsWith('/qna'))
      {
        NavbarComponent.qnalit=true;
      }
      else if (routeinstr.startsWith('/dashboard'))
      {
        NavbarComponent.dashboardlit=true;
      }
   }
    signup()
    {
      this.router.navigate(['/signup'])
      NavbarComponent.signuplit=true;
      NavbarComponent.qnalit=false;
      NavbarComponent.dashboardlit=false;
      NavbarComponent.prevqlit=false;
    }

    qna()
    {
      this.router.navigate(['/qna',{'userid':NavbarComponent.userId}])
      NavbarComponent.signuplit=false;
      NavbarComponent.qnalit=true;
      NavbarComponent.dashboardlit=false;
      NavbarComponent.prevqlit=false;
    }

    dashboard()
    {
      if (NavbarComponent.userId!=null)
      {
      this.router.navigate(['/dashboard',{'userid':NavbarComponent.userId}])
      NavbarComponent.signuplit=false;
      NavbarComponent.qnalit=false;
      NavbarComponent.dashboardlit=true;
      NavbarComponent.prevqlit=false;
      }
    }

    getsignuplit()
    {
      return NavbarComponent.signuplit;
    }
    
    getdashboardlit()
    {
      return NavbarComponent.dashboardlit;
    }

    getqnalit()
    {
      return NavbarComponent.qnalit;
    }

    getprevqlit()
    {
      return  NavbarComponent.prevqlit;
    }

    issignedin()
    {
       return NavbarComponent.userId>=0;
    }
}
