import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PesosFormatPipe } from './pesos-format.pipe';



@NgModule({
  declarations: [
    PesosFormatPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppMaterialModule,
    HttpClientModule,
    RouterModule,
    PesosFormatPipe
  ]
})
export class SharedModule { }
