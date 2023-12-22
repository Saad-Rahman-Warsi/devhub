import { Component } from '@angular/core';
import { GetserviceService } from '../getservice.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dashsummary',
  templateUrl: './dashsummary.component.html',
  styleUrls: ['./dashsummary.component.css']
})
export class DashsummaryComponent {
  userid:any;
  component:any;
  username:any;
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
}
