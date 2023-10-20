import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateusersComponent } from './form-createusers.component';

describe('FormCreateusersComponent', () => {
  let component: FormCreateusersComponent;
  let fixture: ComponentFixture<FormCreateusersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateusersComponent]
    });
    fixture = TestBed.createComponent(FormCreateusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
