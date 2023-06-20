import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.component').then((m)=>m.HomeComponent)
    
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: '**',
    redirectTo: 'home', 
  },

  
] 

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
