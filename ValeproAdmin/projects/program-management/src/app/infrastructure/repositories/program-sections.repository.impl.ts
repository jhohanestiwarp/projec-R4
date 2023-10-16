import { Injectable } from '@angular/core';
import { ProgramSectionsRepository } from '../../core/repositories/program-sections.repository';
import { BoardByTypeAndProgramRequest, BoardCreateRequest, BoardRemoveRequest } from '../../core/models/BoardRequest.model';
import { ProgramSectionsService } from '../services/program-sections.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramSectionsRepositoryImpl implements ProgramSectionsRepository {

  constructor(private programSectionsService: ProgramSectionsService) {}

  createBoard(params: BoardCreateRequest) {
    return this.programSectionsService.createBoard(params);
  }

  removeBoard(params: BoardRemoveRequest) {
    return this.programSectionsService.removeBoard(params);
  }

  getBoardByTypeAndProgram(params: BoardByTypeAndProgramRequest) {
    return this.programSectionsService.getBoardByTypeAndProgram(params);
  }
}
