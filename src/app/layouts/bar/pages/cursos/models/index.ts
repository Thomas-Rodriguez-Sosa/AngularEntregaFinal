export type UserRole = 'PROFESSOR' | 'STUDENT';

export type Course = '1° A' | '1° B' | '1° C'

export interface Alumnos {
    id: string;
    firstName:string;
    lastName:string;
    // courseId:Course;
    regisDate:Date;
}

export interface CreateAlumPayload {
    firstName:string | null;
    lastName:string | null;
    courseId:Course | null;
    regisDate:Date | null;
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