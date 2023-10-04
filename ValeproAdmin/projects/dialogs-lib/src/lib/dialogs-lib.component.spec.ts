import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsLibComponent } from './dialogs-lib.component';

describe('DialogsLibComponent', () => {
  let component: DialogsLibComponent;
  let fixture: ComponentFixture<DialogsLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsLibComponent]
    });
    fixture = TestBed.createComponent(DialogsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
