import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './etdiant-dashbord/chat/chat.component';
import { CoursesComponent } from './etdiant-dashbord/courses/courses.component';
import { DashbordComponent } from './etdiant-dashbord/dashbord/dashbord.component';
import { EtdiantDashbordComponent } from './etdiant-dashbord/etdiant-dashbord.component';
import { GroupsComponent } from './etdiant-dashbord/groups/groups.component';
import { ProfilComponent } from './etdiant-dashbord/profil/profil.component';
import { QuizsComponent } from './etdiant-dashbord/quizs/quizs.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'profilstudent',
    component: EtdiantDashbordComponent,
    children: [
      {
        path: '',
        redirectTo: 'profil',
        pathMatch:'full'
      },
      {
        path:'profil',
        component : ProfilComponent
      },
      {
        path: 'dashbord',
        component:DashbordComponent
      },
      {
        path: 'quizs',
        component:QuizsComponent
      },
      {
        path: 'groups',
        component:GroupsComponent
      },
      {
        path: 'courses',
        component:CoursesComponent
      },
      {
        path: 'chat',
        component:ChatComponent
      }
    ]
  },
  {
    path: '404',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
