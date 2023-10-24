import { SaveFormConfigDTO } from '../../infraestructure/dto/userFormManagement.dto';
import { SaveFormConfigRequest } from '../models/saveFormConfigRequest.model';

export class UserFormSaveFormConfigMapper {
  static fromDomainToApi(model: SaveFormConfigRequest): SaveFormConfigDTO {
    return {
      ProgramId: model.programId,
      ReferenceTableId: model.referenceTableId,
      FormAttributeSaves: model.formAttributeSaves.map((e) => ({
        FormAttributeId: e.formAttributeId,
        VisibleToValepro: e.visibleToValepro,
        VisibleToWebResponsive: e.visibleToWebResponsive,
        Required: e.required,
      })),
    };
  }
}
