//Ejmeplo POO

class Rectangulo {
  base = 0;
  altura = 0;

  constructor() {
    console.log('desde el metodo constructor');
  }
  area() {
    return this.base * this.altura;
  }
  perimetro(){
      return (this.base*2 ) + (this.altura*2)
  }
}

let rectanguloUno = new Rectangulo();
rectanguloUno.altura = 5;
rectanguloUno.base = 5;

console.log(rectanguloUno.area());
console.log(rectanguloUno.perimetro());