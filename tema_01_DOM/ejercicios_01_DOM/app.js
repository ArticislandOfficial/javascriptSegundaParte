const agregar1 = () => {
  let text = document.createElement("h1");
  text.innerHTML = "Accion del Boton 1";
  document.querySelector(".btnOne").appendChild(text);
};

const agregar2 = () => {
  let text = document.createElement("p");
  text.innerText = "Accion del Boton 2";
  document.querySelector(".btnTwo").appendChild(text);

};

const agregar3 = ()=>{
    alert('text')
}