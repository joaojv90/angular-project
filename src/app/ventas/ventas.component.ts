import { Component } from '@angular/core';
import { ServicioProductosService } from '../services/servicio-productos.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  constructor (private service:ServicioProductosService){}

  product : any = {}

  ngOnInit(){
    this.service.getProductos().subscribe(pr => {
      this.product=pr
  })
  }

}
