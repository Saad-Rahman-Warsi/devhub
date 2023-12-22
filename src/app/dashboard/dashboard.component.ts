import { Component } from '@angular/core';
import { GetserviceService } from '../getservice.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    userid:any;
    username:any;
    component:any;
    error:any;

    constructor(private service:GetserviceService,private route:ActivatedRoute,private router:Router)
     {
      
     }

    ngOnInit()
    {
      this.route.paramMap.subscribe((params: ParamMap)=> {
        this.userid=params.get('userid')
        this.component=params.get('component')
      })
      this.service.getEmployeeById(this.userid).subscribe(data => this.username=data, error=>this.error);
    }

    dashboard()
    {
      this.router.navigate(['/dashboard',{'userid':this.userid,'component':'dashsummary'}])
    }

    notification()
    {

    }

    activity()
    {

    }

    postques()
    {
      this.router.navigate(['/dashboard',{'userid':this.userid,'component':'postques'}])
    }

    account()
    {

    }

    viewques()
    {
     
     this.router.navigate(['/dashboard',{'userid':this.userid,'component':'questions'}])
    }
}
