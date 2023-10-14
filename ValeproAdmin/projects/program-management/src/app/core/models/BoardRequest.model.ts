export class BoardCreateRequest {
  constructor(
    public BoardTypeId: number,
    public Segments: number[],
    public LanguageId: number,
    public ProgramId: number,
    public Name: string,
    public StartDateValidity: string,
    public EndDateValidity: string,
    public OpeningModeId: number,
    public Url: string,
    public Image: {
      ImageData: string;
      ImageName: string;
      ImageExtension: string;
    },
    public Properties: string
  ) {}
}

export class BoardRemoveRequest {
  constructor(public BoardId: number) {}
}

export class BoardByTypeAndProgramRequest {
  constructor(
    public ProgramId : number,
    public BoardTypeId: number
  ) {}
}
