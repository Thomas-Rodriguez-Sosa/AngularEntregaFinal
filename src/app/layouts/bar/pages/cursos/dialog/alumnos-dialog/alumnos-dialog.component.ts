import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos } from '../../models';

@Component({
  selector: 'app-alumnos-dialog',
  templateUrl: './alumnos-dialog.component.html',
  styleUrl: './alumnos-dialog.component.scss',
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      <form>
        <mat-form-field>
          <input matInput [(ngModel)]="data.firstName" placeholder="Nombre">
        </mat-form-field>
        <mat-form-field>
          <input matInput [(ngModel)]="data.lastName" placeholder="Apellido">
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onSave()">Guardar</button>
      <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Salir</button>
    </mat-dialog-actions>
  `,
})
export class AlumnosDialogComponent {
  static nextId = 3;
  alumnForm: FormGroup;
  cursos = [
    {value: '1°A', viewValue: '1°A'},
    {value: '1°B', viewValue: '1°B'},
    {value: '1°C', viewValue: '1°C'}
  ]

  constructor(private formBuilder:FormBuilder, public matDialogRef:MatDialogRef<AlumnosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumnos,
  ) {
    this.alumnForm = this.formBuilder.group ({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      regisDate: [new Date()]
    })
  }

  onSave(): void {
    if (this.alumnForm.invalid){
      this.alumnForm.markAllAsTouched();
    }
    else {
      this.matDialogRef.close(this.alumnForm.value)
    }
  }
}
