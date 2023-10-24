export class GetAllUserRequest {
  constructor(
    public programId: number,
    public documentTypeId: number,
    public documentNumber: string,
    public firstNameLastName: string,
    public numberPhone: string,
    public email: string,
    public countryId: number,
    public departmentId: number,
    public cityId: number,
    public address: string,
    public personTypeId: number,
    public roleId: number,
    public stateId: number,
    public pageSize: number,
    public pageNumber: number
  ) {}
}
