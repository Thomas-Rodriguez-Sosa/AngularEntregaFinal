import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BarComponent } from './bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BarRoutingModule } from './bar-routing.module';
import { CursosModule } from './pages/cursos/cursos.module';

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
    CursosModule,
    MatButtonModule,
  ],
  exports: [
    BarComponent
  ]
})
export class BarModule { }
