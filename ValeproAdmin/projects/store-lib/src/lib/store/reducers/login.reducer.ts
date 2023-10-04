import { createReducer, on } from "@ngrx/store";
import { loadLogin, loadedLogin } from "../actions/login.actions";
import { LoginResponseState } from '../models/login-response.state';
import { LoginResponseModel } from "projects/authorizer/src/app/core/models/loginResponse.model";


export const initialState: LoginResponseState = { loading: false, responseLogin: new LoginResponseModel('', '', '', '', 0, 0, {}, 0, '', 0, false, 0, '','') }


export const loginReducer = createReducer(
  initialState,
  on(loadLogin, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedLogin, (state, response) => {
    return { ...state, loading: false, response };
  })
)
