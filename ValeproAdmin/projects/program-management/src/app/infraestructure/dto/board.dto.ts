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

export interface BoardByTypeAndProgramRequestDTO {
  ProgramId: number;
  BoardTypeId: number;
}
