import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormRegistroComponent {

  
  minCaracteres: number = 3;
  dniMinLength: number = 7;
  telefonoMinLength: number = 8;



  nombreControl = new FormControl('', [Validators.required, Validators.minLength(this.minCaracteres)]);
  apellidoControl = new FormControl('', [Validators.required, Validators.minLength(this.minCaracteres)]);
  emailControl = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],);
  dniControl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1000000), Validators.max(99999999) ]);
  telefonoControl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(this.telefonoMinLength)]);

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<FormRegistroComponent>){
    this.registerForm = this.formBuilder.group({

      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
      dni: this.dniControl,
      telefono: this.telefonoControl,

    })

  }


  getErrorMessage() {
    if (this.emailControl.hasError('required')) {
      return 'Tenes que ingresar un e-mail';
    }

    return this.emailControl.hasError('email') ? 'E-mail invalido' : '';
  }


  cerrarDialog(){
    this.dialogRef.close();
  }

  crearUsuario(){}

}
