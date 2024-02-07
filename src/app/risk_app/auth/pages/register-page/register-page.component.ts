import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {IUser} from "../../../interfaces/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent implements OnInit{

  myForm!: FormGroup;


  user: IUser = {
    nickname: '',
    nombre: '',
    email: '',
    password: '',

  };

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      nickname: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', Validators.required],
    },{
      validators: this.passwordMatchValidator,
    });
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (!password || !confirmPassword) {
      return null;
    }
    return password.value === confirmPassword.value ? null : { 'passwordMismatch': true };
  }

  register() {
    if (this.myForm.valid) {
      console.log('Formulario válido:', this.myForm.value);

      this.user.nickname= this.myForm.value.nickname;
      this.user.password = this.myForm.value.password;
      this.user.email = this.myForm.value.email;
      this.user.nombre = this.myForm.value.username;


      this.authService.registerUser(this.user).subscribe({
        next: (response) => {
          console.log('Registro exitoso', response);
          this.router.navigate(["/"])
          // Redirigir a la página deseada u otras acciones necesarias
        },
        error: (error) => {
          console.error('Error en el registro', error);
          // Mostrar un mensaje de error al usuario, si es necesario
        },
        // Puedes incluir complete si es necesario
        complete: () => {
          console.log('La suscripción ha sido completada.');
        }
      });



    } else {
      console.log('Formulario no válido. Verifica los campos.');
    }
  }

}
