import { ProgramDTO } from "../../infraestructure/dto/program.dto";
import { ProgramSaveRequestModel } from "../models/programSaveRequest.model";

export class ProgramMapper {
  static fromApiToDomain(dto: ProgramDTO): ProgramSaveRequestModel {
    return {
      name: dto.Name,
      startDateValidity: new Date(dto.StartDateValidity),
      endDateValidity: new Date(dto.EndDateValidity),
      costCenter: dto.CostCenter,
      countryId: dto.CountryId,
      regionId: dto.RegionId,
      cityId: dto.CityId,
      address: dto.Address,
    };
  }

  static fromDomainToApi(model: ProgramSaveRequestModel): ProgramDTO {
    return {
      Name: model.name,
      StartDateValidity: model.startDateValidity,
      EndDateValidity: model.endDateValidity,
      CostCenter: model.costCenter,
      CountryId: model.countryId,
      RegionId: model.regionId,
      CityId: model.cityId,
      Address: model.address,
    }
  }
}
