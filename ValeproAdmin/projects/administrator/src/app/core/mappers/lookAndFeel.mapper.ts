import { LookAndFeelDTO } from "../../infrastructure/dto/lookAndFeel.dto";
import { LookAndFeelModel } from "../models/lookAndFeel.model";

export class LookAndFeelMapper {


  static fromApiToDomain(lookAndFeelDto: LookAndFeelDTO): LookAndFeelModel {
    return {
      ProgramId: lookAndFeelDto.ProgramId,
      ImageBackgroundLogin: lookAndFeelDto.ImageBackgroundLogin,
      PrimaryColor: lookAndFeelDto.PrimaryColor,
      SecondaryColor: lookAndFeelDto.SecondaryColor,
      TertiaryColor: lookAndFeelDto.TertiaryColor
    };
  }
 }
