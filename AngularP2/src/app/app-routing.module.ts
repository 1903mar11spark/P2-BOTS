import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { CreateUserComponent } from './components/landings/create-user/create-user.component';
import { LoginComponent } from './components/landings/login/login.component';
import { AdminHomeComponent } from './components/landings/admin-home/admin-home.component';
import { UserHomeComponent } from './components/landings/user-home/user-home.component';
import { InfoComponent } from './components/landings/info/info.component';




const routes: Routes = [

  { path: ' ', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signUp', component: CreateUserComponent},
  { path: 'adminHome', component: AdminHomeComponent},
  { path: 'userHome', component: UserHomeComponent},
  { path: 'info', component: InfoComponent},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
