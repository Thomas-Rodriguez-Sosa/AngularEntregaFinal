import { createReducer, on } from '@ngrx/store';
import { Alumnos, IProfs } from '../../layouts/bar/pages/cursos/models/index';
import { authActions } from './auth.actions';

export interface AuthState {
    authUser: null | Alumnos;
}

const initialState: AuthState = {
    authUser: null
};

const MOCK_AUTH_USER: Alumnos = {
    id: '1',
    firstName: 'Gojo',
    lastName: 'Satoru',
    regisDate: new Date
}

export const authFeatureName = 'auth';

export const authReducer = createReducer(
    initialState, 
    on(authActions.login, (state) => {

        // this._authProf$.next(this.MOCK_AUTH_USER)
        localStorage.setItem('accessToken', 'asdasd');
        // this.router.navigate(['bar', 'home'])

        return {
            authUser: MOCK_AUTH_USER
        }
    }),
    on(authActions.logout, () => {
        localStorage.removeItem('accessToken')

        return initialState
    })
)