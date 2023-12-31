import { createReducer, on } from "@ngrx/store";
import { loadFailLogin, loadLogin, loadedLogin } from "../actions/login.actions";
import { LoginResponseState } from '../models/login-response.state';
import { saveSession } from "../storage/storage.storage";


export const initialState: LoginResponseState = {
  loading: false,
  responseLogin: {
    userId: "",
    userName: "",
    accessToken: "",
    email: "",
    personId: 0,
    sessionId: 0,
    roles: {},
    programId: 0,
    programName: "",
    languageId: 0,
    requiredNewPassword: false,
    phone: 0,
    hiddenPhone: "",
    hiddenEmail: ""
  }
}


export const loginReducer = createReducer(
  initialState,
  on(loadLogin, (state) => {
    return { ...state, loading: true };
  }),
  on(loadFailLogin, (state) => {
    return { ...state, loading: false };
  }),
  on(loadedLogin, (state, response) => {
    if(response.responseLogin.accessToken != ''){
      saveSession(response.responseLogin, 'userLoginData');
    }
    return { ...state, loading: false, responseLogin: response.responseLogin};
  })
)
