import { Injectable } from '@angular/core';
import { ICursos, Alumnos } from './models/index';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  constructor() {}

  getCursos(): ICursos[] {
    return [
      {
        id: 1,
        course: '',
        year: 0
      }
    ]
  }
}


