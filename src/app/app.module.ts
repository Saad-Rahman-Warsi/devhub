import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TeamsComponent } from './teams/teams.component';
import { QuestionanswersComponent } from './questionanswers/questionanswers.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DashboardComponent } from './dashboard/dashboard.component'; // Add this line for the dropdown module
import { SignupService } from './signup.service';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { QuestionanswerComponent } from './questionanswer/questionanswer.component';
import { PostquestionComponent } from './postquestion/postquestion.component';
import { DashsummaryComponent } from './dashsummary/dashsummary.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    PagenotfoundComponent,
    TeamsComponent,
    QuestionanswersComponent,
    DashboardComponent,
    TeamComponent,
    QuestionanswerComponent,
    PostquestionComponent,
    DashsummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    HttpClientModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
