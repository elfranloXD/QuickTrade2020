import { Component, OnInit } from '@angular/core';
import { IProducto, IPMotor, IPInmobiliaria, IPTecnologia } from '../interfaces';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})

export class ProductListPage implements OnInit {

    productos: (IProducto | IPMotor | IPInmobiliaria | IPTecnologia)[];

    constructor(private _productosService: ProductosService) {
    }

    ngOnInit() {
        this.productos = this._productosService.getProductos();
    }


}
