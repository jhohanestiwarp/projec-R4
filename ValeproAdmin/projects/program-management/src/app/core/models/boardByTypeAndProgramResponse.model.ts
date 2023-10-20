export class BoardByTypeAndProgramResponse {
  constructor(
    public BoardId: number,
    public BoardTypeId: number,
    public LanguageId: number,
    public ProgramId: number,
    public Name: string,
    public StartDateValidity: string,
    public EndDateValidity: string,
    public OpeningModeId: number,
    public Url: string,
    public Image: string,
    public DisplayOrder: number,
    public Properties: string,
    public DateRegister: string,
    public DateUpdate: string,
    public PersonIdCreate: number,
    public PersonIdUpdate: number
  ) {}
}
