import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public usuarioLogueado:any;

  login(mail: string, contraseña: string, snackBar: MatSnackBar) {

    let datos = localStorage.getItem(mail)

    if (datos) {
      let usuarioGuardado = JSON.parse(datos)

      if (usuarioGuardado.password == contraseña) {
        this.usuarioLogueado = usuarioGuardado;
        snackBar.open('Bienvenido/a ' + usuarioGuardado.nombre, 'Omitir', {
          duration: 3000,
        })
        this.router.navigate([''])
        return;

      }
    }
    snackBar.open('Usuario o Contraseña incorrectos.', 'Omitir', {
      duration: 3000,
    })
  }

}
