import { Component, ViewChild } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import { Alumnos } from './models';
import { MatDialog } from '@angular/material/dialog';
import { AlumnosDialogComponent } from './dialog/alumnos-dialog/alumnos-dialog.component';


@Component({
  selector: 'app-cursos', 
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'course', 'regisDate'];
  alumList: Alumnos[] = [{
    id: 1,
    firstName: 'Lisandro',
    lastName: 'Correa',
    course: '1° B',
    regisDate: new Date(),
  },
  {
    id: 2,
    firstName:'Tomas',
    lastName:'Avendaño',
    course:'1° A',
    regisDate: new Date(),
  }
]
@ViewChild(MatTable) table!: MatTable<Alumnos>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.alumList.length);
    this.alumList.push(this.alumList[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.alumList.pop();
    this.table.renderRows();
  }

  constructor(private MatDialog: MatDialog) {}

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
