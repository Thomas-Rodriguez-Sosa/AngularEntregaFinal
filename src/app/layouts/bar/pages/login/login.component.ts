import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModule } from './login.module';
import { BarModule } from '../../bar.module';
import { AuthService } from '../auth/auth.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy, OnInit{

  authUserChangeSubscription?: Subscription;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private authService: AuthService, 
    private Router: Router ) {
    this.loginForm = this.fb.group ({
      nombre: ['', Validators.required],
      contraseña: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  // subscribeToAuthUserChange(): void {
  //   this.authUserChangeSubscription = this.authService.authProf$.subscribe((authProf: any) => {
  //     if (authProf != null) {
  //       this.Router.navigate(['bar']);
  //     }
  //   });
  // }

  logIn() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    }
    else {
    this.authService.logIn(this.loginForm.getRawValue());
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.authUserChangeSubscription?.unsubscribe();
  }

  // formularioContacto = this.fb.group({
  //   nombre: this.fb.control('', Validators.required),
  //   contraseña: this.fb.control('', [Validators.required, Validators.minLength(6)]),
  //   address: this.fb.control(''),
  //   email: this.fb.control('', [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'), Validators.required]),
  // });

  get emailControl(){
    return this.loginForm.get('email')
  }
  get passControl(){
    return this.loginForm.get('contraseña')
  }
  get nameControl(){
    return this.loginForm.get('nombre')
  }

  onSubmit(): void {
    Swal.fire({
      title: "¡Sesion Iniciada!",
      text: "Bienvenido",
      icon: "success"
    });
  }
}
