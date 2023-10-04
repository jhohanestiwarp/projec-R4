export interface LoginResponseDTO {
    userId: string;
    userName: string;
    accessToken: string;
    email: string;
    personId: number;
    sessionId: number;
    roles: {};
    programId: number;
    programName: string;
    languageId: number;
    requiredNewPassword: boolean;
    phone: number;
    hiddenPhone: string;
    hiddenEmail: string;
}
