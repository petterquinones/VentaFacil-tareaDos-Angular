import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Servicio } from 'src/app/models/servicio.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {

  productos: Product [];
  servicios:Servicio[];

  constructor() { 
    this.productos=[];
    this.servicios=[];
  }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
         this.productos.push(new Product("Producto: " + i , "Marca: "+i, "modelo: "+i, i*550,i*1212, " descripción: is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "+i," new Date "+i ));
         
         this.servicios.push(new Servicio("Servicio_"+ i, i*999, i*22, "descripcion_"+ i , "Hoy"));
    }
  }
}
