import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { EtdiantDashbordComponent } from './etdiant-dashbord/etdiant-dashbord.component';
import { ProfDashbordComponent } from './prof-dashbord/prof-dashbord.component';
import { ProfilComponent } from './etdiant-dashbord/profil/profil.component';
import { DashbordComponent } from './etdiant-dashbord/dashbord/dashbord.component';
import { ChatComponent } from './etdiant-dashbord/chat/chat.component';
import { CoursesComponent } from './etdiant-dashbord/courses/courses.component';
import { GroupsComponent } from './etdiant-dashbord/groups/groups.component';
import { QuizsComponent } from './etdiant-dashbord/quizs/quizs.component';
import { NotfoundComponent } from './notfound/notfound.component';

//import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminDashbordComponent,
    EtdiantDashbordComponent,
    ProfDashbordComponent,
    ProfilComponent,
    DashbordComponent,
    ChatComponent,
    CoursesComponent,
    GroupsComponent,
    QuizsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
