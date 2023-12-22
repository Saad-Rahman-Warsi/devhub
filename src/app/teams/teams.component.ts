import { Component } from '@angular/core';
import { Team } from '../model/Team';
import { GetserviceService } from '../getservice.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
    teams:any;
    error:any;
    userId:any;
    
    ngOnInit()
    {
      this.route.paramMap.subscribe((params: ParamMap)=> {
        this.userId=params.get('userid')
      })
      this.service.getTeamsById(this.userId).subscribe(data => this.teams = data , error=> this.error=error);
    }

    constructor(private service: GetserviceService,private route:ActivatedRoute,private router:Router)
    {
        
    }
    }
  
