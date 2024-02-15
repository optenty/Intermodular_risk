import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {IUser} from "../../../interfaces/User";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{

  user: IUser = {
    nickname: '',
    password: '',
  };


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  public myForm: FormGroup = this.fb.group({
    nickname: ['', Validators.required],
    password: [ "", Validators.compose([
      Validators.required,
      Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|).{8,}$"),
    ])]
  })

  login() {
    if (this.myForm.valid) {
      this.user.nickname = this.myForm.value.nickname;
      this.user.password = this.myForm.value.password;

      this.authService.loginUser(this.user).subscribe({
        next: (response) => {
          console.log('Inicio de sesión exitoso', response);
          sessionStorage.setItem("session",response.toString());
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error en el inicio de sesión', error);
        },
        complete: () => {
          console.log('La suscripción ha sido completada.');
        }
      });

    } else {
      console.log('Formulario no válido. Verifica los campos.');
    }

  }

  ngOnInit(): void {
  }
}
