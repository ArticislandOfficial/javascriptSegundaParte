//Ejmeplo POO

class Rectangulo {
  // base = 0;
  // altura = 0;

  constructor(base,altura) {
    this.base=base;
    this.altura=altura;
    // this.area()
    console.log('desde el metodo constructor');
  }
  //Metodos 
  area() {
    return this.base * this.altura;
  }
  perimetro(){
      return (this.base*2 ) + (this.altura*2)
  }
}

let rectanguloUno = new Rectangulo(5,5);
// rectanguloUno.altura = 5;
// rectanguloUno.base = 5;

 console.log(rectanguloUno.area());
 console.log(rectanguloUno.perimetro());
///DOM

document.getElementById("respuesta").innerHTML = rectanguloUno.area();