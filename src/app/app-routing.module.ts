import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { AboutComponent } from './pages/dashboard/about/about.component';
import { ContactComponent } from './pages/dashboard/contact/contact.component';
import { SignupComponent } from './modules/signup/signup.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'signup', component:SignupComponent},
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
