import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { FiltroComponent } from './home/filtro/filtro.component';
import CarritoComprasComponent from './home/carrito-compras/carrito-compras.component';
import { LoginComponent } from './auth/login/login.component';
import { FormRegistroComponent } from './auth/form-registro/form-registro.component';
import { ListaProductosComponent } from './home/lista-productos/lista-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    ListaProductosComponent,
    FiltroComponent,
    CarritoComprasComponent,
    LoginComponent,
    FormRegistroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
