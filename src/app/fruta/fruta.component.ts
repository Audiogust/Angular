import { Component, OnInit }  from "@angular/core";

@Component({
 selector:"fruta",
 templateUrl: "./fruta.component.html" 

}) 

export class FrutaComponent {

public nombre_componente = " Componente de frutas ";
public listado_frutas = " naranja, sandia, platano, manzana ";
private hola;
public nombre:String;
public edad:number;
public mayordeEdad:boolean;
public trabajo:Array<any> = ["Edgar",20,"estudiante"];
comodin: any ="cualquier cosa ";
 
constructor(){
   this.nombre="Mimoso";
   this.edad=6;  
  }

  ngOnInit(){
   this.cambiarNombre("Edgar");
   this.cambiarEdad(22);
   console.log(this.nombre+""+this.edad);
   var uno =  9;
   var dos = 10;
if(uno === 9){
  let uno =3;
  var dos =22;
console.log("Dentro de if "+uno);
}
console.log(" Fuera  de if "+uno);

  }

  cambiarNombre(nombre){
   this.nombre = nombre;
  }

  cambiarEdad(edad){
   this.edad =edad;
  }
  
}