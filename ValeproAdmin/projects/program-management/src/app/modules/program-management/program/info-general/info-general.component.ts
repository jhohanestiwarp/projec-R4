import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DivipolaResponse } from 'projects/program-management/src/app/core/models/divipola.model';
import { ProgramSaveRequestModel } from 'projects/program-management/src/app/core/models/programSaveRequest.model';
import { ResponseBase } from 'projects/program-management/src/app/core/models/responseBase.model';
import { DivipolaRepository } from 'projects/program-management/src/app/core/repositories/divipola.repository';
import { ProgramRepository } from 'projects/program-management/src/app/core/repositories/program.repository';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.scss']
})
export class InfoGeneralComponent{

  //#region Injects
  programRepository:ProgramRepository = inject(ProgramRepository);
  diviPolaRepository: DivipolaRepository =  inject(DivipolaRepository);
  formBuilder: FormBuilder = inject(FormBuilder);
  store: Store = inject(Store);
  //#endregion

  //#region variables
  programCreateForm!: FormGroup;
  //#endregion

  //#region Lists
  _listCountry: DivipolaResponse[] = [];
  _listDepartments: DivipolaResponse[] = [];
  _listCities: DivipolaResponse[] = [];
  //#endregion

  constructor(){
    this.creatreForm();
    this.getCountry();
  }

  creatreForm(){
    this.programCreateForm =  this.formBuilder.group({
      programName: ['', Validators.required],
      starDate: ['', Validators.required],
      endDate: ['', Validators.required],
      costCenter: ['', Validators.required],
      country: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  getCountry(){
    this.diviPolaRepository.getCountry(0).subscribe({
      next: (data: ResponseBase<DivipolaResponse[]>)=> {
        this._listCountry = data.data;
      },
      error: (error: HttpErrorResponse) => { console.error(error);}
    });
  }

  getDepartments(){
    this.diviPolaRepository.getDepartment(0 ,this.programCreateForm.get('country')?.value).subscribe({
      next: (data: ResponseBase<DivipolaResponse[]>)=> {
        this._listDepartments = data.data;
      },
      error: (error: HttpErrorResponse) => { console.error(error);}
    });
  }

  getCities(){
    this.diviPolaRepository.getCities(0, this.programCreateForm.get('country')?.value, this.programCreateForm.get('department')?.value).subscribe({
      next: (data: ResponseBase<DivipolaResponse[]>)=> {
        this._listCities = data.data;
      },
      error: (error: HttpErrorResponse) => { console.error(error);}
    });
  }

  saveProgram(){
    let programModel: ProgramSaveRequestModel = {
      name: this.programCreateForm.get('programName')?.value,
      startDateValidity: this.programCreateForm.get('starDate')?.value,
      endDateValidity: this.programCreateForm.get('endDate')?.value,
      costCenter: Number(this.programCreateForm.get('costCenter')?.value),
      countryId: Number(this.programCreateForm.get('country')?.value),
      regionId: this.programCreateForm.get('department')?.value,
      cityId: Number(this.programCreateForm.get('city')?.value),
      address: this.programCreateForm.get('address')?.value
    }

    this.programRepository.programSave(programModel).subscribe({
      next: (data: ResponseBase<[]>) => {
        console.log(data);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.error);
      }
    })
  }



}
