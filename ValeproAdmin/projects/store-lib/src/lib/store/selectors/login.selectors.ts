import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { LoginResponseState } from "../models/login-response.state";

export const selectResponseLoginLoaded = (state: AppState) => state.responseLogin;

export const selectResponseLogin = createSelector(
  selectResponseLoginLoaded,
  (state: LoginResponseState) => state.responseLogin
);

export const selectResponseLoginLoading = createSelector(
  selectResponseLoginLoaded,
  (state: LoginResponseState) => state.loading
);
