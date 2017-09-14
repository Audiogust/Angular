import { Injectable } from '@angular/core'
@Injectable(
)
export class RopaService{
    public nombre_prenda = 'Pantalones Vaqueros';
    public coleccion_ropa = ["Pantalones blancos","camiseta roja"];
    prueba(nombre_prenda){
        return nombre_prenda;
    }

    addRopa(nombre_prenda){
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }
    getRopa(){
        return this.coleccion_ropa;
    }
}