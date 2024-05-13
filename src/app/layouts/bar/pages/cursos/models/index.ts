import { EmailValidator } from "@angular/forms";

export interface Alumnos {
    id: number;
    firstName:string;
    lastName:string;
    courseId:number;
    regisDate:Date
}
export interface ICursos {
    id: number;
    course: string;
    year: number;
}
export interface IProfs {
    nombre: string;
    contraseña: string;
    email: string;
    address: string;
    role: string;
}