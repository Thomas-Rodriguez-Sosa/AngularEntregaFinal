import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent implements OnInit {
  constructor() {
    // this.runReloj();

  }
  ngOnInit(): void {
    
    const obtenerAlumno$ = new Observable((observer) => {
      observer.next('Hola Mundo')
    })

    const obtenerAlumnoSubcription = obtenerAlumno$.subscribe({
      next: (resultado) => {
        console.log(resultado)
      },
      error: () => {

      },
      complete: () => {}
    })
 
  }

  

  // runReloj() {
  //   const obs = new Observable((observer) => {
  //     observer.error('Error al obtener la fecha actual')

  //     setTimeout(() => {
  //       observer.next(new Date());
  //     }, 2000);

  //     observer.complete();

  //   });  
  //   obs.subscribe({
  //     next: (resultado) => {
  //     console.log(resultado)
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //     complete: () => {
  //       console.log('Completado')
  //     }
  //   })
  // }

}
