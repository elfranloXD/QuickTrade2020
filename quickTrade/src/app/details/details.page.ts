import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    id: number
    nombre: string
    descripcion: string
    categoria: string
    precio: number

    cocheMoto: string
    anyo: number
    nKm: number

    estadoProducto: string

    localidad: string
    nHabitaciones: string

    constructor(private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.id = +this._activatedRoute.snapshot.paramMap.get('id');
        this.nombre = this._activatedRoute.snapshot.paramMap.get('nombre');
        this.descripcion = this._activatedRoute.snapshot.paramMap.get('descripcion');
        this.categoria = this._activatedRoute.snapshot.paramMap.get('categoria');
        this.precio = +this._activatedRoute.snapshot.paramMap.get('precio');
        this.cocheMoto = this._activatedRoute.snapshot.paramMap.get('cocheMoto');
        this.anyo = +this._activatedRoute.snapshot.paramMap.get('anyo');
        this.nKm = +this._activatedRoute.snapshot.paramMap.get('nKm');
        this.estadoProducto = this._activatedRoute.snapshot.paramMap.get('estadoProducto');
        this.localidad = this._activatedRoute.snapshot.paramMap.get('localidad');
        this.nHabitaciones = this._activatedRoute.snapshot.paramMap.get('nHabitaciones');

        console.log("id-" + this.id);
        console.log("nombre-" + this.nombre);
        console.log("descripcion-" + this.descripcion);
        console.log("categoria-" + this.categoria);
        console.log("precio-" + this.precio);
        console.log("cocheMoto-" + this.cocheMoto);
        console.log("anyo-" + this.anyo);
        console.log("nKm-" + this.nKm);
        console.log("estadoProducto-" + this.estadoProducto);
        console.log("localidad-" + this.localidad);
        console.log("nHabitaciones-" + this.nHabitaciones);

    }


}
