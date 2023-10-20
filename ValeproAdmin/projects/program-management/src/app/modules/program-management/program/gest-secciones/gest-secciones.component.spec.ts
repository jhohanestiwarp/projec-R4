import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestSeccionesComponent } from './gest-secciones.component';

describe('GestSeccionesComponent', () => {
  let component: GestSeccionesComponent;
  let fixture: ComponentFixture<GestSeccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestSeccionesComponent]
    });
    fixture = TestBed.createComponent(GestSeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
