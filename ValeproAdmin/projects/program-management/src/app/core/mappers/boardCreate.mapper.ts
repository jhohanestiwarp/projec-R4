import { BoardCreateRequestDTO } from '../../infraestructure/dto/board.dto';
import { BoardCreateRequest } from '../models/boardCreateRequest.model';

export class BoardCreateMapper {
  static fromApiToDomain(dto: BoardCreateRequestDTO): BoardCreateRequest {
    return {
      boardTypeId: dto.BoardTypeId,
      segments: dto.Segments,
      languageId: dto.LanguageId,
      programId: dto.ProgramId,
      name: dto.Name,
      startDateValidity: new Date(dto.StartDateValidity),
      endDateValidity: new Date(dto.EndDateValidity),
      openingModeId: dto.OpeningModeId,
      url: dto.Url,
      image: {
        imageData: dto.Image.ImageData,
        imageName: dto.Image.ImageName,
        imageExtension: dto.Image.ImageExtension,
      },
      properties: dto.Properties
    };
  }

  static fromDomainToApi(model: BoardCreateRequest): BoardCreateRequestDTO {
    return {
      BoardTypeId: model.boardTypeId,
      Segments: model.segments,
      LanguageId: model.languageId,
      ProgramId: model.programId,
      Name: model.name,
      StartDateValidity: model.startDateValidity,
      EndDateValidity: model.endDateValidity,
      OpeningModeId: model.openingModeId,
      Url: model.url,
      Image: {
        ImageData: model.image.imageData,
        ImageName: model.image.imageName,
        ImageExtension: model.image.imageExtension,
      },
      Properties: model.properties,
    };
  }
}
