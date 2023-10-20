import { BoardCreateResponseDTO } from '../../infraestructure/dto/board.dto';
import { BoardCreateResponse } from '../models/boardCreateResponse.model';

export class BoardCreateResponseMapper {
  static fromApiToDomain(dto: BoardCreateResponseDTO): BoardCreateResponse {
    return {
      createBoardStatus: dto.CreateBoardStatus
    };
  }
}
