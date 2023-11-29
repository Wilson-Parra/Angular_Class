import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent {
  // Propiedades del formulario de registro de oferta de trabajo
  titulo: string = '';
  descripcion: string = '';
  empresa: string = '';
  fechaPublicacion: string = '';

  constructor(private router: Router) {}

  register() {
    // Validación de campos del formulario
    if (this.titulo.trim() === '' || this.descripcion.trim() === '' || this.empresa.trim() === '' || this.fechaPublicacion.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos del formulario.'
      });
      return;
    }

    // Puedes agregar más validaciones específicas para la oferta de trabajo si es necesario

    // Lógica para agregar la oferta de trabajo a localStorage
    const storedOfertas = localStorage.getItem('ofertas');
    const ofertas = storedOfertas ? JSON.parse(storedOfertas) : [];

    // Crear objeto de oferta
    const oferta = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      empresa: this.empresa,
      fechaPublicacion: this.fechaPublicacion
    };

    // Agregar oferta al array
    ofertas.push(oferta);
    localStorage.setItem('ofertas', JSON.stringify(ofertas));

    // Mostrar mensaje de éxito
    Swal.fire({
      icon: 'success',
      title: '¡Oferta registrada!',
      text: `La oferta "${this.titulo}" ha sido registrada exitosamente.`
    });

    // Redirigir o realizar otras acciones según sea necesario
    // this.router.navigate(['/otra-ruta']);
  }

  // Función para cerrar sesión
  logout(): void {
    this.router.navigate(['/login']);
  }

}
