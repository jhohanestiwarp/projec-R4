import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {
  UserRegistrationForm,
  UserRegistrationResult,
} from '../../../../interfaces/system-management.interface';

@Component({
  selector: 'app-ur-form-base',
  templateUrl: './ur-form-base.component.html',
  styleUrls: ['./ur-form-base.component.scss'],
})
export class URFormStepBaseComponent implements OnInit {
  // inputs
  @Input() fieldNames: string[] = [];
  @Input() back = false;
  @Input() next = false;
  @Input() finish = false;

  // outputs
  @Output() nextEvent = new EventEmitter<UserRegistrationResult>();

  // table
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['name', 'visibleWeb', 'visible', 'required'];
  displayedHeaders = [
    'Nombre de campos',
    'Visible web',
    'Visible',
    'Obligatorio',
  ];

  // form
  urForm = this.fb.nonNullable.group<UserRegistrationForm>({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dataSource.data = this.fieldNames.map((name) => ({
      name,
      required: false,
      visible: false,
      visibleWeb: false,
    }));

    // set form
    this.urForm = this.fb.nonNullable.group(this.getFormInitialValue());
  }

  stepperNext() {
    this.nextEvent.emit(this.urForm.value);
  }

  setFormRequired(checked: boolean, index: number) {
    this.dataSource.data[index].required = checked;
    this.dataSource.data = this.dataSource.data;
    this.setFormValue(index);
  }

  setFormVisible(checked: boolean, index: number) {
    this.dataSource.data[index].visible = checked;
    this.dataSource.data = this.dataSource.data;
    this.setFormValue(index);
  }

  setFormVisibleWeb(checked: boolean, index: number) {
    this.dataSource.data[index].visibleWeb = checked;
    this.dataSource.data = this.dataSource.data;
    this.setFormValue(index);
  }

  private setFormValue(index: number) {
    const { required, visible, visibleWeb } = this.dataSource.data[index];

    this.urForm.patchValue({
      ...this.urForm.value,
      [index]: [visibleWeb, visible, required],
    });
    console.log({ required, visible, visibleWeb });
    console.log(this.urForm.value);
  }

  private getFormInitialValue(): UserRegistrationForm {
    const formValue: UserRegistrationForm = {};
    this.dataSource.data.forEach((_, index) => {
      formValue[index] = [[false, false, false]];
    });

    return formValue;
  }
}
