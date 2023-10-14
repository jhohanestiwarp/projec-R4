import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasiveUsersComponent } from './masive-users.component';

describe('MasiveUsersComponent', () => {
  let component: MasiveUsersComponent;
  let fixture: ComponentFixture<MasiveUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasiveUsersComponent]
    });
    fixture = TestBed.createComponent(MasiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
