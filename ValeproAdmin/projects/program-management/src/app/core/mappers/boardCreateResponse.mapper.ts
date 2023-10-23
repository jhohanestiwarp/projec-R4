import { BoardCreateResponseDTO } from '../../infraestructure/dto/board.dto';
import { BoardCreateResponseModel } from '../models/boardCreateResponse.model';

export class BoardCreateResponseMapper {
  static fromApiToDomain(dto: BoardCreateResponseDTO): BoardCreateResponseModel {
    return {
      createBoardStatus: dto.CreateBoardStatus
    };
  }
}
