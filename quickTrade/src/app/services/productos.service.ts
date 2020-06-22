import { Injectable } from '@angular/core';
import { IProducto, IPMotor, IPInmobiliaria, IPTecnologia } from '../interfaces';

@Injectable()

export class ProductosService {

    productos: (IProducto | IPMotor | IPInmobiliaria | IPTecnologia)[] = [
        {
            id: 1,
            nombre: "Mesa de noche",
            descripcion: "Mesa de madera de roble pintada y barnizada",
            precio: 10,
            categoria: "Hogar"
        },
        {
            id: 2,
            nombre: "Renault Megane Blanco",
            descripcion: "Renault Megane 120.000km",
            precio: 4000,
            categoria: "Motor",
            cocheMoto: "Coche",
            anyo: 2005,
            nKm: 120000,
        },
        {
            id: 3,
            nombre: "Samsung Galaxy S5",
            descripcion: "Samsung Galaxy S5 usado desde hace 6 meses",
            precio: 150,
            categoria: "Tecnologia",
            estadoProducto: "Sin usar",
        },
        {
            id: 4,
            nombre: "Chalet Vedat de Torrent",
            descripcion: "Chalet en Torrent gran estado recien amueblado",
            precio: 150000,
            categoria: "Inmobiliaria",
            localidad: 'Torrent',
            nHabitaciones: 10,
        }
    ]

    getProductos(): IProducto[] {
        return this.productos;
    }

}
