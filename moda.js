let listaUsario = [];

const numeroDatos = () => 
  parseInt(document.getElementById("numeroDatos").value);

const aggInput = () => {
    // Eliminar todos los elementos hijos del padre;
    var elemento = document.getElementById("aggInputs");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    };
    // Quitar respuesta
    const resultado = document.getElementById("resultado");
    resultado.innerText = "";
    // Colocar los input
    let valorNumeroDatos = numeroDatos();
    for (let i = 1; i < (valorNumeroDatos + 1); i++ ) { 
      var direccion = `<label for="${i}">Dato ${i}: </label> 
                       <input id="${i}" type="number"/>`;
        let input1 = document.getElementById("aggInputs");
        input1.insertAdjacentHTML('beforeend', direccion);
    }
    let button = document.getElementById("aggInputs");
    button.insertAdjacentHTML('beforeend', 
      '<button type="button" onclick="calcularModa()">Calcular</button>');
}

const datosUsuario = () => {
  let valorNumeroDatos = numeroDatos();
  // Trae los datos a JS y los agrega a la lista
  for (let i = 1; i < (valorNumeroDatos + 1); i++){
      let id = i;
      let dato = document.getElementById(id);
      let valueDato = parseInt(dato.value);
      listaUsario.push(valueDato);
  }
}

const calcularModa = () => {
  listaUsario = [];
  datosUsuario();
  const moda = obtenerModa(listaUsario);
  const resultado = document.getElementById("resultado");
  resultado.innerText = `La moda es: ${moda[0]} y se repite ${moda[1]} veces`;
}

const obtenerModa = (lista) => {
  const listaCount = {};

  lista.map((elemento) => {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  const listaArray = Object.entries(listaCount).sort(
    (elementoA, elementoB) => elementoA[1] - elementoB[1]);

  console.log('Moda:', listaArray[listaArray.length - 1]);
  return listaArray[listaArray.length - 1];
}