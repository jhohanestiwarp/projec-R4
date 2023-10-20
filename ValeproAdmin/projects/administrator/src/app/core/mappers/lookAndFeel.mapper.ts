import { LookAndFeelDTO } from "../../infrastructure/dto/lookAndFeel.dto";
import { ProgramRequestDto } from "../../infrastructure/dto/programRequest.dto";
import { ProgramResponseDto } from "../../infrastructure/dto/programResponse.dto";
import { LookAndFeelModel } from "../models/lookAndFeel.model";
import { ProgramRequestModel } from "../models/programRequest.model";
import { ProgramResponseModel } from "../models/programResponse.model";

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

  static programDomainToApi(programModel: ProgramRequestModel): ProgramRequestDto{
    return {
      URL: programModel.URL
    }
  }

  static programApiToDomain(programDto: ProgramResponseDto): ProgramResponseModel {
    return {
      ProgramId: programDto.programId
    }
  }
 }
