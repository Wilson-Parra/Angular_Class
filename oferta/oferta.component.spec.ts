import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaComponent } from './oferta.component';

describe('OfertaComponent', () => {
  let component: OfertaComponent;
  let fixture: ComponentFixture<OfertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfertaComponent]
    });
    fixture = TestBed.createComponent(OfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register an offer', () => {
    // Modificar y agregar lógica de prueba para el registro de ofertas
    component.titulo = 'Oferta de Trabajo';
    component.descripcion = 'Descripción de la oferta';
    component.empresa = 'Nombre de la Empresa';
    component.fechaPublicacion = '2023-01-01';

    component.register();

    // Agregar expectativas según el comportamiento esperado después de registrar la oferta
    // Por ejemplo, puedes esperar que el localStorage tenga la nueva oferta
    const storedOfertas = localStorage.getItem('ofertas');
    const ofertas = storedOfertas ? JSON.parse(storedOfertas) : [];

    expect(ofertas.length).toBe(1);
    expect(ofertas[0].titulo).toBe('Oferta de Trabajo');
    expect(ofertas[0].descripcion).toBe('Descripción de la oferta');
    expect(ofertas[0].empresa).toBe('Nombre de la Empresa');
    expect(ofertas[0].fechaPublicacion).toBe('2023-01-01');
  });

  // Puedes agregar más pruebas según tus necesidades

});
