export interface IProducto {
    id: number,
    nombre: string,
    descripcion:string,
    precio: number,
    categoria: string
}

export interface IPMotor extends IProducto {
    cocheMoto: string,
    anyo: number,
    nKm: number,
}

export interface IPTecnologia extends IProducto {
    estadoProducto: string
}

export interface IPInmobiliaria extends IProducto {
    localidad: string,
    nHabitaciones: number
}

