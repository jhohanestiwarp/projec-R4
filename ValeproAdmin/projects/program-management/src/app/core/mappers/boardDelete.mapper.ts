import { BoardDeleteRequestDTO } from '../../infraestructure/dto/board.dto';
import { BoardDeleteRequest } from '../models/boardDeleteRequest.model';

export class BoardDeleteMapper {
  static fromApiToDomain(dto: BoardDeleteRequestDTO): BoardDeleteRequest {
    return {
      boardId: dto.BoardId
    };
  }

  static fromDomainToApi(model: BoardDeleteRequest): BoardDeleteRequestDTO {
    return {
      BoardId: model.boardId
    }
  }
}
