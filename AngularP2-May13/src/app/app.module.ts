import { BaseComponent } from './components/base/base.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CardsComponent } from './components/cards/cards.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AllusersComponent } from './components/allusers/allusers.component';
import { StatsComponent } from './components/stats/stats.component';
import { UpdateInfoComponent } from './components/update-info/update-info.component';
import { UserLoggingComponent } from './components/user-logging/user-logging.component';

//MyModules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //BootStrap import 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//may add Material and Graphics 
//as comments aren't permitted in json, to add Bootstrap you also have to go to the angular.json file and add
// "node_modules/bootstrap/dist/css/bootstrap.min.css" this to the styles section among assets

//Routing
import { AppRoutingModule } from './app-routing.module';

//Good old components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { InfoComponent } from './components/info/info.component';
//services 

//

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHomeComponent,
    InfoComponent,
    NavComponent,
    FooterComponent,
    UserInfoComponent,
    CardsComponent,
    UserHomeComponent,
    AllusersComponent,
    StatsComponent,
    UpdateInfoComponent,
    UserLoggingComponent,
    BaseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  //lets ang know root component
  bootstrap: [AppComponent]
})
export class AppModule { }
