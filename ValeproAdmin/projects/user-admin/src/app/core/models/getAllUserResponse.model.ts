export class GetAllUserResponse {
  constructor(
    public documentType: number,
    public documentNumber: string,
    public firstNameLastName: string,
    public numberPhone: string,
    public email: string,
    public countryId: number,
    public departmentId: string,
    public cityId: string,
    public address: string,
    public personType: number,
    public roleId: number,
    public role: string,
    public stateId: number,
  ) {}
}
