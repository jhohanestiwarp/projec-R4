import { DivipolaDTO } from "../../infraestructure/dto/divipola.dto";
import { DivipolaResponse } from "../models/divipola.model";

export class CityMapper {
  static fromApiToDomain(dto: DivipolaDTO):  DivipolaResponse {
    return {
        codeId: dto.codeId,
        name: dto.name
    };
  }
}
