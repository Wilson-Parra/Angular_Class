import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar',
  templateUrl: './gestionar.component.html',
  styleUrls: ['./gestionar.component.css']
})
export class GestionarComponent implements OnInit {
  ofertas: any[] = []; // Cambia el tipo según la estructura de tus ofertas

  // Propiedades para actualizar oferta
  ofertaToUpdate: any = {};
  updateMode = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadOfertas();
  }

  loadOfertas() {
    const storedOfertas = localStorage.getItem('ofertas');
    this.ofertas = storedOfertas ? JSON.parse(storedOfertas) : [];
  }

  
  updateOffer(oferta: any) {
    // Puedes implementar la lógica para actualizar la oferta aquí
    // Podrías establecer el modo de actualización y llenar los campos del formulario con los detalles de la oferta
    this.updateMode = true;
    this.ofertaToUpdate = { ...oferta };
    // También podrías implementar la lógica para actualizar en localStorage
  }

  deleteOffer(index: number): void {
    // Obtener la oferta que se va a eliminar
    const ofertaToDelete = this.ofertas[index];
  
    // Preguntar al usuario para confirmar la eliminación usando SweetAlert
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar la oferta "${ofertaToDelete.titulo}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminar la oferta de la matriz
        this.ofertas.splice(index, 1);
        
        // Actualizar localStorage
        localStorage.setItem('ofertas', JSON.stringify(this.ofertas));
  
        // Mostrar mensaje de éxito usando SweetAlert
        Swal.fire({
          icon: 'success',
          title: '¡Oferta eliminada!',
          text: `La oferta "${ofertaToDelete.titulo}" ha sido eliminada.`
        });
      }
    });
  }

  
  // Función para cerrar sesión
  logout(): void {
    this.router.navigate(['/login']);
  }
}


