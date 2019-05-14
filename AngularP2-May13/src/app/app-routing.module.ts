import { BaseComponent } from './components/base/base.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserLoggingComponent } from './components/user-logging/user-logging.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './components/play/play.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [

  { path: ' ', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: UserLoggingComponent},
  { path: 'base', component: BaseComponent },
  { path: 'adminHome', component: AdminHomeComponent},
  { path: 'userHome', component: UserHomeComponent},
  { path: 'info', component: UserHomeComponent},
  { path: 'play', component: PlayComponent},
  { path: 'signUp', component: CreateUserComponent},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
