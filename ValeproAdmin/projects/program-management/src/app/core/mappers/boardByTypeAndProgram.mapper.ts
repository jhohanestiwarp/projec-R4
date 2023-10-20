import { BoardByTypeAndProgramRequestDTO } from '../../infraestructure/dto/board.dto';
import { BoardByTypeAndProgramRequest } from '../models/boardByTypeAndProgramRequest.model';

export class BoardByTypeAndProgramMapper {
  static fromApiToDomain(dto: BoardByTypeAndProgramRequestDTO): BoardByTypeAndProgramRequest {
    return {
      boardTypeId: dto.BoardTypeId,
      programId: dto.ProgramId,
    };
  }

  static fromDomainToApi(model: BoardByTypeAndProgramRequest): BoardByTypeAndProgramRequestDTO {
    return {
      BoardTypeId: model.boardTypeId,
      ProgramId: model.programId,
    }
  }
}
