import { LoginResponseModel } from "projects/authorizer/src/app/core/models/loginResponse.model";

export interface LoginResponseState{
  loading: boolean,
  responseLogin: Readonly<LoginResponseModel>;
}
