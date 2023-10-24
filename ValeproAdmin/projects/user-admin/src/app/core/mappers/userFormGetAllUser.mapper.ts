import { GetAllUserDTO } from '../../infraestructure/dto/userFormManagement.dto';
import { GetAllUserResponse } from '../models/getAllUserResponse.model';

export class UserFormGetAllUserMapper {
  static fromApiToDomain(dto: GetAllUserDTO): GetAllUserResponse {
    return {
      documentType: dto.DocumentType,
      documentNumber: dto.DocumentNumber,
      firstNameLastName: dto.FirstNameLastName,
      numberPhone: dto.NumberPhone,
      email: dto.Email,
      countryId: dto.CountryId,
      departmentId: dto.DepartmentId,
      cityId: dto.CityId,
      address: dto.Address,
      personType: dto.PersonType,
      roleId: dto.RoleId,
      role: dto.Role,
      stateId: dto.StateId,
    };
  }
}
