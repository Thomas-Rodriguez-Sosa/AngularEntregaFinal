import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { LoginData } from "../../layouts/bar/pages/auth/models";

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        login: props<{ payload: LoginData }>(),
        logout: emptyProps(),
    }
})