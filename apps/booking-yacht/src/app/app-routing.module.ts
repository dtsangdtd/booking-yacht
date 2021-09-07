import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login/login.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: LoginComponent},
  
]

@NgModule({
  declarations: [HomePagesComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
