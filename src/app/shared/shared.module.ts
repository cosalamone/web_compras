import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule,
    RouterModule,
    
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule, 
    AppMaterialModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class SharedModule { }
