import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesAndFunctionsComponent } from './roles-and-functions.component';

describe('RolesAndFunctionsComponent', () => {
  let component: RolesAndFunctionsComponent;
  let fixture: ComponentFixture<RolesAndFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesAndFunctionsComponent]
    });
    fixture = TestBed.createComponent(RolesAndFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
