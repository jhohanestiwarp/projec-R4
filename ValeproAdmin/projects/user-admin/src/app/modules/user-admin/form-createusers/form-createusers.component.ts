import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-createusers',
  templateUrl: './form-createusers.component.html',
  styleUrls: ['./form-createusers.component.scss']
})
export class FormCreateusersComponent {
  formGroupUser: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

  ) {

    this.formGroupUser = this.formBuilder.group({
      documentId: ['', [Validators.required]],
    });
  }
}
