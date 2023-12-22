import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuestionanswersComponent } from './questionanswers/questionanswers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsComponent } from './teams/teams.component';
import { QuestionanswerComponent } from './questionanswer/questionanswer.component';

const routes: Routes = [{path: 'signup',component:SignupComponent},{path:'dashboard' ,component: DashboardComponent},{path:'',redirectTo: 'signup', pathMatch:"full"},{path: '**',component: PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
