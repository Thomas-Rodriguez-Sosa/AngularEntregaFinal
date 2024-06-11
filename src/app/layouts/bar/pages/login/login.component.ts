import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModule } from './login.module';
import { BarModule } from '../../bar.module';
import { AuthService } from '../auth/auth.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { authActions } from '../../../../store/auth/auth.actions';
import { Store } from '@ngrx/store';
import { authUser } from '../../../../store/auth/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy, OnInit{

  authUserChangeSubscription?: Subscription;

  loginForm: FormGroup;

  authUserSubscription?: Subscription;

  constructor(private fb: FormBuilder, 
    private authService: AuthService, 
    private Router: Router, 
    private store: Store, ) {
    this.loginForm = this.fb.group ({
      nombre: ['', Validators.required],
      contraseña: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  logIn() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    }
    else {
    // this.authService.logIn(this.loginForm.getRawValue());
    this.store.dispatch(authActions.login({ payload: this.loginForm.getRawValue() }))
    }
  }

  ngOnInit(): void {
    this.authUserSubscription = this.store.select(authUser).subscribe({
      next: (user) => {
        if (user) this.Router.navigate(['bar', 'home'])
      }
    })
  }

  ngOnDestroy(): void {
      this.authUserSubscription?.unsubscribe();
  }


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
