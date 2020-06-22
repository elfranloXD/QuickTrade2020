import { Component } from '@angular/core';
import { IProducto, IPMotor, IPInmobiliaria, IPTecnologia } from '../interfaces';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-insert-product',
    templateUrl: './insert-product.page.html',
    styleUrls: ['./insert-product.page.scss'],
})
export class InsertProductPage {

    //Atributos generales
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;

    //Atributos Motor
    cocheMoto: string;
    nKm: number;
    anyo: number;

    //Atributos Inmobiliaria
    localidad: string;
    nHabitaciones: number;

    //Atributos Tecnologia
    estadoProducto: string;

    productos: (IProducto | IPMotor | IPInmobiliaria | IPTecnologia)[] = [
        {
            id: 1,
            nombre: "Mesa de noche",
            descripcion: "Mesa de madera de roble pintada y barnizada",
            precio: 10,
            categoria: "Inmobiliaria"
        },
        {
            id: 2,
            nombre: "Renault Megane Blanco",
            descripcion: "Renault Megane 120.000km",
            precio: 4000,
            categoria: "Motor",
            cocheMoto: "Coche",
            nKm: 120000,
            anyo: 2005,
        }
    ]

    constructor(private _toastCtrl: ToastController) { }
    async presentToast() {
        const toast = await this._toastCtrl.create({
            message: 'Se ha insertado correctamente',
            duration: 1000,
            position: 'bottom',
        });
        toast.present();
    }

    ngOnInit() {
        console.log("Bienvenido a la APP")
    }

    insertar() {
        if (this.categoria == 'Hogar') {
            this.productos.push({
                "id": this.productos.length + 1,
                "nombre": this.nombre,
                "descripcion": this.descripcion,
                "precio": this.precio,
                "categoria": this.categoria,
            });
        }

        if (this.categoria == 'Motor') {
            this.productos.push({
                "id": this.productos.length + 1,
                "nombre": this.nombre,
                "descripcion": this.descripcion,
                "precio": this.precio,
                "categoria": this.categoria,
                "cocheMoto": this.cocheMoto,
                "nKm": this.nKm,
                "anyo": this.anyo
            });
        }

        if (this.categoria == 'Inmobiliaria') {
            this.productos.push({
                "id": this.productos.length + 1,
                "nombre": this.nombre,
                "descripcion": this.descripcion,
                "precio": this.precio,
                "categoria": this.categoria,
                "localidad": this.localidad,
                "nHabitaciones": this.nHabitaciones
            });
        }

        if (this.categoria == 'Tecnologia') {
            this.productos.push({
                "id": this.productos.length + 1,
                "nombre": this.nombre,
                "descripcion": this.descripcion,
                "precio": this.precio,
                "categoria": this.categoria,
                "estadoProducto": this.estadoProducto
            });
        }
        this.presentToast();
    }
}