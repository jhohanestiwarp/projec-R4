import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConfirmCancelDialogComponent } from './mat-confirm-cancel-dialog.component';

describe('MatConfirmCancelDialogComponent', () => {
  let component: MatConfirmCancelDialogComponent;
  let fixture: ComponentFixture<MatConfirmCancelDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatConfirmCancelDialogComponent]
    });
    fixture = TestBed.createComponent(MatConfirmCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
