import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alumnos-dialog',
  templateUrl: './alumnos-dialog.component.html',
  styleUrl: './alumnos-dialog.component.scss'
})
export class AlumnosDialogComponent {
  static nextId = 3;
  alumnForm: FormGroup;
  cursos = [
    {value: '1°A', viewValue: '1°A'},
    {value: '1°B', viewValue: '1°B'},
    {value: '1°C', viewValue: '1°C'}
  ]

  constructor(private formBuilder:FormBuilder, private matDialogRef:MatDialogRef<AlumnosDialogComponent>) {
    this.alumnForm = this.formBuilder.group ({
      id: [AlumnosDialogComponent.nextId++],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      course: [this.cursos],
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
