export class GetCreateUserFormByProgramResponse {
  constructor(
    public configurationAttibutesFormByPrograms: Array<{
      formAttributeId: number;
      label: string;
      placeholder: string;
      name: string;
      type: string;
      regularExpression: string | null;
      length: number | null;
      dataSource: number;
      required: boolean;
    }>
  ) {}
}
