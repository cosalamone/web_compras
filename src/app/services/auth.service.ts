import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }


  login(mail: string, contraseña: string) {

    let datos = localStorage.getItem(mail)

    if (datos){
     let usuarioGuardado =  JSON.parse(datos)

     if( usuarioGuardado.password == contraseña){
      alert('Bienvenido/a ' + usuarioGuardado.nombre)
      this.router.navigate([''])
      return;

     }
    }
    alert('Usuario o Contraseña incorrectos.')
  }

}
