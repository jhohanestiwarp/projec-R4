export class LoginResponseModel {

    constructor(
      public userId: string,
      public userName: string,
      public accessToken: string,
      public email: string,
      public personId: number,
      public sessionId: number,
      public roles: {},
      public programId: number,
      public programName: string,
      public languageId: number,
      public requiredNewPassword: boolean,
      public phone: number,
      public hiddenPhone: string,
      public hiddenEmail: string
      ) {
    }
  }
  