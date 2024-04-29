import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IProfs } from "../layouts/bar/pages/cursos/models";

@Injectable({ providedIn: 'root'})
export class AuthService  {

    authProf$ = new BehaviorSubject<IProfs | null>(null);

    logIn(): void {
        this.authProf$.next({
            id: 1,
            firstName: 'Gojo',
            lastName: 'Satoru',
            email: 'gojostrongest@mail.com',
            dni:33984587,
            courses: '1° A, 1° B'
        })
    }

    logOut(): void {
        this.authProf$.next(null);
    }

}