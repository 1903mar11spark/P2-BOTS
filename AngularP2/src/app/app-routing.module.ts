import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CreateUserComponent } from './components/landings/create-user/create-user.component';
import { LoginComponent } from './components/landings/login/login.component';
import { AdminHomeComponent } from './components/landings/admin-home/admin-home.component';
import { UserHomeComponent } from './components/landings/user-home/user-home.component';




const routes: Routes = [

  { path: ' ', redirectTo: 'login'},
  { path: 'login', component: LoginComponent},
  { path: 'signUp', component: CreateUserComponent},
  { path: 'adminHome', component: AdminHomeComponent},
  { path: 'userHome', component: UserHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
