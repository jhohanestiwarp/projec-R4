import { BoardByTypeAndProgramResponseDTO } from '../../infraestructure/dto/board.dto';
import { BoardByTypeAndProgramResponse } from '../models/boardByTypeAndProgramResponse.model';

export class BoardByTypeAndProgramResponseMapper {
  static fromApiToDomain(dto: BoardByTypeAndProgramResponseDTO): BoardByTypeAndProgramResponse {
    return {
      boardId: dto.BoardId,
      boardTypeId: dto.BoardTypeId,
      languageId: dto.LanguageId,
      programId: dto.ProgramId,
      name: dto.Name,
      startDateValidity: dto.StartDateValidity,
      endDateValidity: dto.EndDateValidity,
      openingModeId: dto.OpeningModeId,
      url: dto.Url,
      image: dto.Image,
      displayOrder: dto.DisplayOrder,
      properties: dto.Properties,
      dateRegister: dto.DateRegister,
      dateUpdate: dto.DateUpdate,
      personIdCreate: dto.PersonIdCreate,
      personIdUpdate: dto.PersonIdUpdate,
    };
  }
}
