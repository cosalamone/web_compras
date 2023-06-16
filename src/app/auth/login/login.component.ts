import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormRegistroComponent } from '../form-registro/form-registro.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(//private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private matDialog: MatDialog,

  ) { }

  minLength: number = 3;

  emailControl = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(this.minLength)]);

  authForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  })


  onSubmit() {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
    } else {
      // this.authService.logIn({
      //   ...(this.authForm.value as Usuario) 
      // })
    }

    setTimeout(() => {
      // this.router.navigateByUrl(this.returnUrl)
    }, 100)
  }

  getErrorMessage() {

    if (this.emailControl.hasError('required')) {
      return 'Debe ingresar un correo';
    }

    return this.emailControl.hasError('pattern') ? 'Correo invalido' : '';
  }


  // Abrit formulario de registro de usuario

  abrirForm(): void {
    const dialog = this.matDialog.open(FormRegistroComponent);
    dialog.afterClosed().subscribe((valor)=>{
      if (valor){
        
      }
    })
  }
}
