import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio.model';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
 servicios: Servicio[];

  constructor() {
    this.servicios=[];
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {

      this.servicios.push(new Servicio("Servicio_" + i, i * 999, i * 22, "descripcion_" + i, "Hoy"));
    }
  }

}
