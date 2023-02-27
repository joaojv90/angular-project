import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioProductosService } from '../services/servicio-productos.service';
import { NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  productos: any ={}
  constructor(private servicio: ServicioProductosService, 
    private router: Router, private modal: NzModalService){}

  id: number=-1

  ngOnInit(){
    this.servicio.getProductos().subscribe(p =>{
      this.productos=p
    })
    const temp= this.router.url.split("/")
    console.log(temp.length)
    if (temp.length>2) {
      this.id= parseInt( temp[2])
    } 
  }

  actualizarP(ide: any, nombre: any, precio:any, cantidad: any , img:any){
    const pr={ id: ide, nombre:nombre, precio:precio, cantidad:cantidad, img:img}
    this.servicio.updateProductos(pr).subscribe( p =>{})
    this.warning()
  }

  add(id: any, name: any, price: any, cant: any, img: any){
    const p = { id: id, nombre: name, precio: price, cantidad: cant, img: img }
    this.servicio.addProductos(p).subscribe(ps => {})
    this.success()
  }

  success(): void {
    const modal = this.modal.success({
      nzTitle: 'El producto a sido agregado'
    });
    setTimeout(() => modal.destroy(), 3000);
  }

  warning(): void {
    const modal = this.modal.warning({
      nzTitle: 'Producto actualizado'
    });
    setTimeout(() => modal.destroy(), 3000);
  }
  
}
