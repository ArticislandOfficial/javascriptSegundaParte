let saludo = () => {
  // console.log("Hola a todos");
  let tablas = document.getElementsByTagName("table");
  for (let tabla = 0; tabla < tablas.length; tabla++) {
    //console.log(tablas.length);
    for (let ciclo = 1; ciclo <= 11; ciclo++) {
      let texth1 = document.createElement("tr");
      let resultado = ciclo * tabla;
      texth1.innerHTML = `<td> ${tabla} x ${ciclo} </td><td>=${resultado} </td> `;
      // Arreglo
      document.getElementsByTagName("tbody")[tabla].appendChild(texth1);
    }
  }
};
saludo();

// let onmouseoutTest =() =>{
//     console.log("Disparo onmouseout");
// }
// let onmouseoverTest =() =>{
//     console.log("Disparo onmouseover");
// }
