export class SaveFormConfigRequest {
  constructor(
    public programId: number,
    public referenceTableId: number,
    public formAttributeSaves: Array<{
      formAttributeId: number;
      visibleToValepro: boolean;
      visibleToWebResponsive: boolean;
      required: boolean;
    }>
  ) {}
}
