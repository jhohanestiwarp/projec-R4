import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  formGroup: FormGroup;

  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;






  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.createStepFormGroup('alvaro', 30),
        this.createStepFormGroup('sergio', 25),
        this.createStepFormGroup('joselo', 25),
        this.createStepFormGroup('dana', 25),

      ]),
    });
  }

  createStepFormGroup(name: string = '', age: number = 0) {
    return this.formBuilder.group({
      name: [name],
      age: [age],
    });
  }

  get formArray() {
    return this.formGroup.get('formArray') as FormArray;
  }

}
