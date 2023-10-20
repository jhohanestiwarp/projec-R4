export class ProgramSaveRequestModel {
    constructor(
    public name: string,
    public startDateValidity: Date,
    public endDateValidity: Date,
    public costCenter: number,
    public countryId: number,
    public regionId: string,
    public cityId: number,
    public address: string){}
}
