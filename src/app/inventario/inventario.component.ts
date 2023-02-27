import { Component } from '@angular/core';
import { ServicioProductosService } from '../services/servicio-productos.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  constructor(private servicio: ServicioProductosService, private modal: NzModalService){}

  productos: any={}

  ngOnInit(){
    this.servicio.getProductos().subscribe( productos =>
      this.productos=productos)
  }

  remove(id:any){
    this.servicio.deleteProductos(id).subscribe(r => {})
    this.error()
    window.location.reload()
  }

  error(): void {
    const modal = this.modal.success({
      nzTitle: 'Se a eliminado un elemento'
    });
    setTimeout(() => modal.destroy(), 3000);
  }

}


