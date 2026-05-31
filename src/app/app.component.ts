import { Component, OnInit } from '@angular/core';
import { ExtraccionDatosService } from './services/extraccion-datos.service'; // Importación correcta

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Variable para almacenar los datos extraídos
  mineralesExtraidos: any[] = [];

  // Inyectamos el servicio con un nombre representativo
  constructor(private mineroService: ExtraccionDatosService) { }

  ngOnInit() {
    // El componente ejecuta el trabajo de consumo al iniciar
    this.mineralesExtraidos = this.mineroService.picarCanteraDeDatos();
  }
}