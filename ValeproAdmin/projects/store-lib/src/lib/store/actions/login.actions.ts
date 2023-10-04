import { createAction, props } from "@ngrx/store";
import { LoginResponseModel } from "projects/authorizer/src/app/core/models/loginResponse.model";


export const loadLogin = createAction(
  '[Login page] loadLogin'
);

export const loadedLogin = createAction(
  '[Login page] loadedLogin success',
  props<{responseLogin: LoginResponseModel}>()
);
