import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavComponent } from './sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [BrowserAnimationsModule, MatIconModule, MatSidenavModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], // Configura los esquemas aquí
    });

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle subMenuVisible', () => {
    const item = { name: 'Test Item', subMenuVisible: false };
    component.toggleSubMenu(item);
    expect(item.subMenuVisible).toBe(true);
    component.toggleSubMenu(item);
    expect(item.subMenuVisible).toBe(false);
  });
});
