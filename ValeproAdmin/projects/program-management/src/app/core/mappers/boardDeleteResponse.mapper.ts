import { BoardDeleteResponseDTO } from '../../infraestructure/dto/board.dto';
import { BoardDeleteResponse } from '../models/boardDeleteResponse.model';

export class BoardDeleteResponseMapper {
  static fromApiToDomain(dto: BoardDeleteResponseDTO): BoardDeleteResponse {
    return {
      deleteBoardStatus: dto.DeleteBoardStatus
    };
  }
}
