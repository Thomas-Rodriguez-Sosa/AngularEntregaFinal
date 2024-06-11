import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { Alumnos } from './models';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlumnosDialogComponent } from './dialog/alumnos-dialog/alumnos-dialog.component';
import { CursosService } from './cursos.service';
import { ICursos } from './models';
import { map } from 'rxjs';
import { AlumnosService } from '../alumnos/alumnos.service';
import { Course } from './models/index';


@Component({
  selector: 'app-cursos', 
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'course', 'regisDate', 'buttons'];
  alumList: Alumnos[] = [];

  cursos: ICursos[] = [];
  $last: any;

  constructor (private cursosService: CursosService,
    @Inject (MatDialog) private MatDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.cursosService.getAlumnos().subscribe((alumnos) => {
      this.alumList = alumnos;
    });
  }

@ViewChild(MatTable) table!: MatTable<Alumnos>;

  deleteRow(element: any) {
    this.cursosService.eliminateAlumno(element).subscribe((result) => {
      if (result) {
        const respond = this.alumList.indexOf(element);
        if (respond === -1) {
          this.alumList.splice(respond, 1);
          this.table.renderRows();
        }
      }
    })
  }

  openDialog(editarAlumno?: Alumnos): void {
    let dialogRef = this.MatDialog.open(AlumnosDialogComponent, {
      data: editarAlumno,
    });
    dialogRef.afterClosed()
    .subscribe({
      next: (result) => {
        if (result) {
          if (editarAlumno) {
            this.alumList = this.alumList.map((a) => 
            a.id === editarAlumno.id ? { ...a, ...result} : a); 
          } else {
            this.cursosService.createAlumno(result).subscribe({
              next: (alumnoCrear) => {
                this.alumList = [...this.alumList, alumnoCrear];
              }
            });
          }
        }
      }
    })
  }
}
