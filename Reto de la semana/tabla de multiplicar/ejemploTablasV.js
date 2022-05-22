// 1. Hacer las tablas de multiplicar del 1 al 10
const multiplicacion = (tabla, number) => {
  return tabla * number;
};

let saludo = () => {
    let inicioTabla = document.querySelector(".inicioTabla").value;
    let finTabla = document.querySelector(".finTabla").value;
    let tablaDeMultiplicar = document.querySelector(".tablaRecorrido").value;
    let array = []; //se agrega arreglo vacio 
    let prueba = document.querySelector(".prueba"); // para agregar el cierre de la tabla

  console.log("Hola a todos");
  let table = ` <table class="table">
                <thead>
                  <tr>
                    <th scope="col" colspan="3"> tabla del ${tablaDeMultiplicar}</th>
                  </tr>
                </thead>
                <tbody>`;
  for (let ciclos = inicioTabla; ciclos <= finTabla; ciclos++) {
    array.push(ciclos);
  }

  array.forEach((contador) => {
    table =
      table +
      `<tr>
            <th scope="col">${contador} x ${tablaDeMultiplicar} </th>
            <th scope="col">=</th>
            <th scope="col">${multiplicacion(tablaDeMultiplicar, contador)}</th>
        </tr>`;
  });
  table =
    table +
    `</tbody>
              </table>`;
prueba.innerHTML = table;
};



