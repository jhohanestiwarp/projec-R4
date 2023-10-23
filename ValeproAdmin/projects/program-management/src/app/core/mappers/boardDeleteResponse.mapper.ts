import { BoardDeleteResponseDTO } from '../../infraestructure/dto/board.dto';
import { BoardDeleteResponseModel } from '../models/boardDeleteResponse.model';

export class BoardDeleteResponseMapper {
  static fromApiToDomain(dto: BoardDeleteResponseDTO): BoardDeleteResponseModel {
    return {
      deleteBoardStatus: dto.DeleteBoardStatus
    };
  }
}
