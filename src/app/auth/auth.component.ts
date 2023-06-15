import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Tenes que ingresar un e-mail';
    }

    return this.email.hasError('email') ? 'E-mail invalido' : '';
  }


  cerrarDialog(){}

  crearUsuario(){}
}
