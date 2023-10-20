export class BoardCreateRequest {
  constructor(
    public boardTypeId: number,
    public segments: number[],
    public languageId: number,
    public programId: number,
    public name: string,
    public startDateValidity: Date,
    public endDateValidity: Date,
    public openingModeId: number,
    public url: null | string,
    public image: {
      imageData: string;
      imageName: string;
      imageExtension: string;
    },
    public properties: null | string
  ) {}
}
