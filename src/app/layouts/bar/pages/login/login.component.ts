import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginModule } from './login.module';
import { BarModule } from '../../bar.module';
import { AuthService } from '../../../../core/auth.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private AuthService: AuthService, private Router: Router ) {}
  
  logIn(): void {
    this.AuthService.logIn();
    this.Router.navigate(['home'])
  }

  ngOnInit(): void {
    this.AuthService.logIn();
  }

  formularioContacto = this.fb.group({
    nombre: this.fb.control('', Validators.required),
    contraseña: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    address: this.fb.control(''),
    email: this.fb.control('', [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'), Validators.required]),
  });

  get emailControl(){
    return this.formularioContacto.get('email')
  }
  get passControl(){
    return this.formularioContacto.get('contraseña')
  }
  get nameControl(){
    return this.formularioContacto.get('nombre')
  }

  onSubmit(): void {
    Swal.fire({
      title: "¡Sesion Iniciada!",
      text: "Bienvenido",
      icon: "success"
    });
  }
}
