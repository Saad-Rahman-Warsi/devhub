import { Component,Input } from '@angular/core';
import { Team } from '../model/Team';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { GetserviceService } from '../getservice.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  @Input()
  team:any;
  

  toggle: Boolean=false;
  view:Team[]=[];
  error:any;
  
  
  

  teamclicked()
  {
      console.log("team="+(this.team as Team))
      console.log("toggle="+this.toggle)
      if (this.toggle==false)
      {
          this.view=(this.team as Team).subteams;
          this.toggle=true;
      }
      else{
        this.view=[];
          this.toggle=false;
      }
  }

  navigatequestion(team:Team)
  {
    this.router.navigate(['/qna',{'team':this.team.name,'userid':NavbarComponent.userId}])
  }

  constructor(private route:ActivatedRoute,private router:Router)
  {

  }

  
 
}
