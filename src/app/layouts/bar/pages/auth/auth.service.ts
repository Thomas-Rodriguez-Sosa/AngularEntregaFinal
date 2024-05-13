import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IProfs } from "../cursos/models";
import { LoginData } from "./models";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root'})
export class AuthService  {
    constructor (private router: Router) {}
    private MOCK_AUTH_USER: IProfs = {
        nombre: 'Gojo Satoru',
        contraseña: 'yowaimo',
        address: 'JJK',
        email: 'gojostrongest@mail.com',
        role: 'Professor'
    }
    private _authProf$ = new BehaviorSubject<IProfs | null>(null);
    public authProf$ = this._authProf$.asObservable();

    
    logIn(data: LoginData): void {
        this._authProf$.next(this.MOCK_AUTH_USER)
        localStorage.setItem('accessToken', 'asdasd');
        this.router.navigate(['bar', 'home'])
    }

    verifyToken(): boolean {
        const token = localStorage.getItem('accessToken');

        if (token) {
            this._authProf$.next(this.MOCK_AUTH_USER)
            return true
        } else {
            return false
        }
    }

    logOut(): void {
        this._authProf$.next(null);
        localStorage.removeItem('accessToken')
    }

}