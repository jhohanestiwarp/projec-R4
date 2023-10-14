import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { LookAndFeelService } from './infrastructure/services/look-and-feel.service';
import { of } from 'rxjs';
import { LookAndFeelModel } from './core/models/lookAndFeel.model';
import { applyTheme } from './styleLoad';
import { LookAndFeelRepository } from './core/repositories/lookAndFeel.repository';
import { RouterModule } from '@angular/router';

describe('AppComponent Look And Feel', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let httpTestingController: HttpTestingController;
  let lookAndFeelRepository: LookAndFeelRepository;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent], // Declara el componente en el módulo de pruebas
      imports: [HttpClientTestingModule, RouterModule],
      providers: [{ provide: LookAndFeelRepository, useClass: LookAndFeelService }],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    lookAndFeelRepository = TestBed.inject(LookAndFeelRepository); // Obtiene el servicio
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifica que no haya solicitudes pendientes después de cada prueba
  });

  it('debe obtener el look and feel y aplicarlo', () => {
    const mockLookAndFeelData: LookAndFeelModel = {
      ProgramId: 41,
      PrimaryColor: '#FF0000',
      SecondaryColor: '#00FF00',
      TertiaryColor: '#0000FF',
      ImageBackgroundLogin: 'imagen-de-fondo.jpg',
    };

    spyOn(lookAndFeelRepository, 'getLookAndFeel').and.returnValue(of(mockLookAndFeelData));

    // Llama explícitamente al método loadStyles del componente
    component.loadStyles();

    // Verifica que los colores se apliquen en tu DOM, por ejemplo:
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--ngx-valepro-color-primary');
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--ngx-valepro-color-secondary');
    const tertiaryColor = getComputedStyle(document.documentElement).getPropertyValue('--ngx-valepro-color-tertiary');
    const imageBackgroundLogin = getComputedStyle(document.documentElement).getPropertyValue('--imagen-background-login');

    expect(primaryColor).toBe(mockLookAndFeelData.PrimaryColor);
    expect(secondaryColor).toBe(mockLookAndFeelData.SecondaryColor);
    expect(tertiaryColor).toBe(mockLookAndFeelData.TertiaryColor);
    expect(imageBackgroundLogin).toBe(`url(${mockLookAndFeelData.ImageBackgroundLogin})`);

     // Agrega esta línea para cerrar la solicitud HTTP
     httpTestingController.expectOne('assets/lookandfeel.json').flush(mockLookAndFeelData);
  });

});
