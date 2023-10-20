export interface BoardCreateResponseDTO {
  CreateBoardStatus: boolean;
}

export interface BoardDeleteResponseDTO {
  DeleteBoardStatus: boolean;
}

export interface BoardByTypeAndProgramResponseDTO {
  BoardId: number;
  BoardTypeId: number;
  LanguageId: number;
  ProgramId: number;
  Name: string;
  StartDateValidity: string;
  EndDateValidity: string;
  OpeningModeId: number;
  Url: string;
  Image: string;
  DisplayOrder: number;
  Properties: string;
  DateRegister: string;
  DateUpdate: string;
  PersonIdCreate: number;
  PersonIdUpdate: number;
}

export interface BoardCreateRequestDTO {
  BoardTypeId: number;
  Segments: number[];
  LanguageId: number;
  ProgramId: number;
  Name: string;
  StartDateValidity: Date;
  EndDateValidity: Date;
  OpeningModeId: number;
  Url: null | string;
  Image: {
    ImageData: string;
    ImageName: string;
    ImageExtension: string;
  };
  Properties: null | string;
}

export interface BoardDeleteRequestDTO {
  BoardId: number;
}

export interface BoardByTypeAndProgramRequestDTO {
  ProgramId: number;
  BoardTypeId: number;
}
