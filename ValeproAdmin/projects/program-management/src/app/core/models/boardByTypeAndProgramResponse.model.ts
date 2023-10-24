export class BoardByTypeAndProgramResponse {
  constructor(
    public boardEntities: Array<{
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
    }>
  ) {}
}
