import { Injectable } from "@angular/core";
import { AuthService } from '../services/auth.service';
import { Observable } from "rxjs";
import { ValidateCodeRequestModel, ValidateCodeResponseModel } from "../../core/models/validateCode.model";
import { GenerateCodeRequestModel, GenerateCodeResponseModel } from "../../core/models/generateCodeRequest.model";
import { RecoverRepository } from "../../core/repositories/recover.repository";
import { ResponseBase } from "../../core/models/responseBase.model";

@Injectable({
    providedIn: 'root'
})
export class RecoverRepositoryImpl implements RecoverRepository {

    constructor(
        private authService: AuthService) {
    }

    generateCode(data: GenerateCodeRequestModel): Observable<ResponseBase<GenerateCodeResponseModel>>{
        return this.authService.generateCode(data);
    };
    validateCode(data: ValidateCodeRequestModel): Observable<ResponseBase<ValidateCodeResponseModel>>{
        return this.authService.validateCode(data);
    };
}
