import { Component, OnInit } from '@angular/core';
import { AuthService } from './pages/auth/auth.service';
import { Observable } from 'rxjs';
import { IProfs } from './pages/cursos/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent implements OnInit{
  showFiller = false;

  authProf$: Observable<IProfs | null>;

  constructor (private authService: AuthService, private router: Router) {
    this.authProf$ = this.authService.authProf$;
  }

  ngOnInit(): void {}

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['login']);
  }

  isMobile (): boolean {
    return window.innerWidth <= 280;
  }
}
