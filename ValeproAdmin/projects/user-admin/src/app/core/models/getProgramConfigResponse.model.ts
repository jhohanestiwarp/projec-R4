export class GetProgramConfigResponse {
  constructor(
    public formAttributes: Array<{
      formAttributeId: number;
      label: string;
      placeholder: string;
      name: string;
      dianRequiredAttribute: boolean;
      active: boolean;
      visibleToValepro: boolean;
      visibleToWebResponsive: boolean;
      required: boolean;
    }>
  ) {}
}
