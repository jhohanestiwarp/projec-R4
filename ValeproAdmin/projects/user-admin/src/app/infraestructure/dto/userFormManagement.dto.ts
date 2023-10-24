export interface GetAllUserDTO {
  DocumentType: number;
  DocumentNumber: string;
  FirstNameLastName: string;
  NumberPhone: string;
  Email: string;
  CountryId: number;
  DepartmentId: string;
  CityId: string;
  Address: string;
  PersonType: number;
  RoleId: number;
  Role: string;
  StateId: number;
}

export interface SaveFormConfigDTO {
  ProgramId: number;
  ReferenceTableId: number;
  FormAttributeSaves: Array<{
    FormAttributeId: number;
    VisibleToValepro: boolean;
    VisibleToWebResponsive: boolean;
    Required: boolean;
  }>;
}
