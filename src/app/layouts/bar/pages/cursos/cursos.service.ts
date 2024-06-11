import { Injectable } from '@angular/core';
import { Alumnos, CreateAlumPayload, ICursos } from './models/index';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  constructor(private httpClient: HttpClient) {}

getAlumnos(): Observable<Alumnos[]> {
  return this.httpClient.get<Alumnos[]>(environment.baseApiURL + '/alumnos')
}

getAlumnoById(id: string): Observable<Alumnos | undefined> {
  return this.httpClient.get<Alumnos>(`${environment.baseApiURL}/alumnos/${id}`);
}

createAlumno(payload: CreateAlumPayload): Observable<Alumnos> {
  return this.httpClient.post<Alumnos>(`${environment.baseApiURL}/alumnos`, payload)
}

eliminateAlumno(id: string): Observable<Alumnos | undefined> {
  return this.httpClient.delete<Alumnos>(`${environment.baseApiURL}/alumnos/${id}`)
}

}


