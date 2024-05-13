import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BarComponent } from './bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BarRoutingModule } from './bar-routing.module';
import { CursosModule } from './pages/cursos/cursos.module';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    BarComponent
  ],
  imports: [
    CommonModule,
    BarRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    CursosModule,
    MatButtonModule,
    AlumnosModule,
    MatListModule,
  ],
  exports: [
    BarComponent
  ]
})
export class BarModule { }
