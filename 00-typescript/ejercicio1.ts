
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE : { nombre:string, edad:number } = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
interface Heroe {
	nombre:string;
	artesMarciales:string[];
}

let batman:Heroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
let resultadoDoble = ( a:number, b:number ) => (a + b) * 2;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string="arco" ) {
  let mensaje:string;

  if( poder ) {
     mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  } else {
     mensaje = `${nombre} tiene un ${poder}`;
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
	base:number = 0;
	altura:number = 0;

	constructor (base:number, altura:number) {
		this.base = base;
		this.altura = altura;
	}

	area = () => this.base * this.altura;
}

let r = new Rectangulo(10, 5);
let a = r.area();
