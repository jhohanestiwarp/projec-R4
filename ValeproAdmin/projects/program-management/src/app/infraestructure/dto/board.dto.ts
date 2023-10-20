export interface BoardCreateResponseDTO {
  createBoardStatus: boolean;
}

export interface BoardDeleteResponseDTO {
  deleteBoardStatus: boolean;
}

export interface BoardByTypeAndProgramResponseDTO {
  boardId: number;
  boardTypeId: number;
  languageId: number;
  programId: number;
  name: string;
  startDateValidity: string;
  endDateValidity: string;
  openingModeId: number;
  url: string;
  image: string;
  displayOrder: number;
  properties: string;
  dateRegister: string;
  dateUpdate: string;
  personIdCreate: number;
  personIdUpdate: number;
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
