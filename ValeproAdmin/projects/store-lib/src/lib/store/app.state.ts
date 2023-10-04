import { ActionReducerMap } from "@ngrx/store";
import { LoginResponseState } from "./models/login-response.state";
import { loginReducer } from "./reducers/login.reducer";

export interface AppState{
  responseLogin: LoginResponseState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  responseLogin: loginReducer
}
