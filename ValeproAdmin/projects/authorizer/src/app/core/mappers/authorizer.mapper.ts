import { GenerateCodeDTO, GenerateCodeResponseDTO } from "../../infraestructure/dto/generateCode.dto";
import { LoginRequestDTO } from "../../infraestructure/dto/login.dto";
import { LoginResponseDTO } from "../../infraestructure/dto/loginResponse.dto";
import { ValidateCodeDTO, ValidateCodeResponseDTO } from "../../infraestructure/dto/validateCode.dto";
import { GenerateCodeRequestModel, GenerateCodeResponseModel } from "../models/generateCodeRequest.model";
import { LoginRequestModel } from "../models/loginRequest.model";
import { LoginResponseModel } from "../models/loginResponse.model";
import { ValidateCodeRequestModel, ValidateCodeResponseModel } from "../models/validateCode.model";

export class AuthorizerMapper {


  static loginfromApiToDomain(loginDto: LoginResponseDTO): LoginResponseModel {
    return {
      accessToken: loginDto.accessToken,
      email: loginDto.email,
      languageId: loginDto.languageId,
      personId: loginDto.personId,
      programId: loginDto.programId,
      programName: loginDto.programName,
      requiredNewPassword: loginDto.requiredNewPassword,
      roles: loginDto.roles,
      sessionId: loginDto.sessionId,
      userId: loginDto.userId,
      userName: loginDto.userId,
      phone: loginDto.phone,
      hiddenEmail: loginDto.hiddenEmail,
      hiddenPhone: loginDto.hiddenPhone
    };
  }
  static loginfromDomainToApi(loginModel: LoginRequestModel): LoginRequestDTO {
    return {
      UserName: loginModel.UserName,
      Password: loginModel.Password,
      ProgramId: loginModel.ProgramId
    }
  }
  static generateCodeFromApiToDomain(generateCodeDto: GenerateCodeResponseDTO): GenerateCodeResponseModel { 
    return {
        UserName: generateCodeDto.userName,
        Phone: generateCodeDto.phone,
        Email: generateCodeDto.email
    };
  } 
  static generateCodeFromDomainToApi(generateCodeModel: GenerateCodeRequestModel): GenerateCodeDTO{
    return {
      userName: generateCodeModel.UserName,
      programId: generateCodeModel.ProgramId
    };
  }
  static validateCodeFromApiToDomain(validateCodeDto: ValidateCodeResponseDTO): ValidateCodeResponseModel { 
    return {
      sucess: validateCodeDto.sucess
    };
  } 
  static validateCodeFromDomainToApi(validateCodeModel: ValidateCodeRequestModel ): ValidateCodeDTO{
    return {
        userName: validateCodeModel.userName,
        programId: validateCodeModel.programId,
        newPassword: validateCodeModel.newPassword,
        newPasswordVerified: validateCodeModel.newPasswordVerified,
        confirmationCode: validateCodeModel.confirmationCode
    };
  }
 }
