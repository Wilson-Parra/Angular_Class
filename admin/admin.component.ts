// admin.component.ts
import Swal from 'sweetalert2';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

  deleteUser(index: number): void {
    // Verificar si el índice está dentro de los límites de la matriz
    if (index < 0 || index >= this.users.length) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Índice de usuario no válido.'
      });
      return;
    }
  
    // Obtener el usuario que se va a eliminar
    const userToDelete = this.users[index];
  
    // Preguntar al usuario para confirmar la eliminación usando SweetAlert
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar al usuario "${userToDelete.username}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminar el usuario de la matriz
        this.users.splice(index, 1);
  
        // Actualizar localStorage
        this.updateLocalStorage();
  
        // Mostrar mensaje de éxito usando SweetAlert
        Swal.fire({
          icon: 'success',
          title: '¡Usuario eliminado!',
          text: `El usuario "${userToDelete.username}" ha sido eliminado.`
        });
      }
    });
  }
  
  updateUser(index: number): void {
    console.log('Actualizar usuario:', this.users[index]);
  }

  private updateLocalStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  // Función para cerrar sesión
  logout(): void {
    this.router.navigate(['/login']);
  }
}
