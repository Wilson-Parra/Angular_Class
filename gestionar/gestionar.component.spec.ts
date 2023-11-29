import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarComponent } from './gestionar.component';

describe('GestionarComponent', () => {
  let component: GestionarComponent;
  let fixture: ComponentFixture<GestionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionarComponent]
    });
    fixture = TestBed.createComponent(GestionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  it('should update an offer', () => {
    // Simula la carga de ofertas previamente registradas
    localStorage.setItem('ofertas', JSON.stringify([
      {
        id: 1,
        titulo: 'Oferta existente',
        descripcion: 'Descripción existente',
        empresa: 'Empresa existente',
        fechaPublicacion: '2023-01-01'
      }
    ]));

    // Configura el componente para la actualización
    component.updateMode = true;
    component.ofertaToUpdate = {
      id: 1,
      titulo: 'Oferta actualizada',
      descripcion: 'Nueva descripción',
      empresa: 'Nueva Empresa',
      fechaPublicacion: '2023-01-02'
    };



    const storedOfertas = localStorage.getItem('ofertas');
    const ofertas = storedOfertas ? JSON.parse(storedOfertas) : [];

    expect(ofertas.length).toBe(1);
    expect(ofertas[0].titulo).toBe('Oferta actualizada');
    expect(ofertas[0].descripcion).toBe('Nueva descripción');
    expect(ofertas[0].empresa).toBe('Nueva Empresa');
    expect(ofertas[0].fechaPublicacion).toBe('2023-01-02');
  });

  it('should delete an offer', () => {
    // Simula la carga de ofertas previamente registradas
    localStorage.setItem('ofertas', JSON.stringify([
      {
        id: 1,
        titulo: 'Oferta a eliminar',
        descripcion: 'Descripción a eliminar',
        empresa: 'Empresa a eliminar',
        fechaPublicacion: '2023-01-03'
      }
    ]));

    spyOn(window, 'confirm').and.returnValue(true);

    const storedOfertas = localStorage.getItem('ofertas');
    const ofertas = storedOfertas ? JSON.parse(storedOfertas) : [];

    expect(ofertas.length).toBe(0);
  });

  // Puedes agregar más pruebas según tus necesidades

});
