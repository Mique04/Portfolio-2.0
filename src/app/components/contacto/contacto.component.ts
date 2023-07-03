import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  fade_in_up: boolean = false;

  toggleFadeInUpForFiveSeconds(): void {
    // Almacenar el estado original
    const originalState = this.fade_in_up;

    // Cambiar fade_in_up a true
    this.fade_in_up = true;

    // Esperar 5 segundos
    setTimeout(() => {
      // Restaurar el estado original después de 5 segundos
      this.fade_in_up = originalState;
    }, 5000);
  }
}
