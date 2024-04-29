import { InjectionToken, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import {MatTable, MatTableModule} from '@angular/material/table';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AlumnosDialogComponent } from './dialog/alumnos-dialog/alumnos-dialog.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';


export const RANDOM_NUMBER = new InjectionToken('RANDOM_NUMBER')


@NgModule({
  declarations: [
    CursosComponent,
    AlumnosDialogComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTableModule,
    MatTable,
    MatButton,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatListModule
  ],
  exports: [CursosComponent],
  providers: [
    {
      provide: RANDOM_NUMBER,
      useFactory: () => {
        return Math.random();
      }
    }
  ]
})
export class CursosModule { 
  
}
