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
      '<button type="button" onclick="calcularMediana()">Calcular</button>');
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

const calcularMediana = () => {
  listaUsario = [];
  datosUsuario();
  const mediana = obtenerMediana(listaUsario);
  const resultado = document.getElementById("resultado");
  resultado.innerText = "El promedio es: " + mediana;
}

const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento);
  return sumaLista / lista.length;
}

const esPar = (numerito) => numerito % 2 === 0 ? true : false;

const obtenerMediana = (lista) => {
  // lista.sort((a,b) => a-b);
  bubbleSort(lista);
  console.log('Lista ordenada: ', lista);
  let mitadLista = parseInt(listaUsario.length / 2);
  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    
    mediana = promedioElemento1y2;
  } else {
    mediana = lista[mitadLista];
  }
  return mediana;

  function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
    return array;
  }
}