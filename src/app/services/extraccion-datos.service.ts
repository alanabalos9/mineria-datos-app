import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtraccionDatosService {

  constructor() { }

  // Método que simula la extracción de datos
  picarCanteraDeDatos() {
    return [
      { id: 1, material: 'Hierro', pureza: '85%', cantidad: '150kg' },
      { id: 2, material: 'Cobre', pureza: '90%', cantidad: '80kg' },
      { id: 3, material: 'Oro', pureza: '99%', cantidad: '10kg' }
    ];
  }
}