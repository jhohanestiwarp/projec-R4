import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratecodeComponent } from './generatecode.component';

describe('GeneratecodeComponent', () => {
  let component: GeneratecodeComponent;
  let fixture: ComponentFixture<GeneratecodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratecodeComponent]
    });
    fixture = TestBed.createComponent(GeneratecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
