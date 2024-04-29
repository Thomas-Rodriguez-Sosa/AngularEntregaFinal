import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { Alumnos } from './models';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlumnosDialogComponent } from './dialog/alumnos-dialog/alumnos-dialog.component';
import { CursosService } from './cursos.service';
import { ICursos } from './models';


@Component({
  selector: 'app-cursos', 
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'course', 'regisDate'];

  cursos: ICursos[] = [];
$last: any;

  constructor (private cursosService: CursosService,
    @Inject (MatDialog) private MatDialog: MatDialog
  ) {
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {}

  alumList: Alumnos[] = [{
    id: 1,
    firstName: 'Lisandro',
    lastName: 'Correa',
    courseId: 1,
    regisDate: new Date(),
  },
  {
    id: 2,
    firstName:'Tomas',
    lastName:'Avendaño',
    courseId: 2,
    regisDate: new Date(),
  }
]
@ViewChild(MatTable) table!: MatTable<Alumnos>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.alumList.length);
    this.alumList.push({
      ...this.alumList[randomElementIndex],
      courseId: this.alumList[randomElementIndex].courseId,});
    this.table.renderRows();
  }

  getCourseName(courseId: number): string {
    const course = this.cursos.find((c) => c.id === courseId)
    return ''
  }

  removeData() {
    this.alumList.pop();
    this.table.renderRows();
  }

  openDialog(): void {
    this.MatDialog.open(AlumnosDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.alumList = [...this.alumList, result]
        }
      }
    })
  }
}

