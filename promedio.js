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
      '<button type="button" onclick="calcularMediaAritmetica()">Calcular</button>');
}

const calcularMediaAritmetica = () => {
  listaUsario = [];
  datosUsuario();
  const sumaLista = listaUsario.reduce(
    (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento);
  const promedioLista = sumaLista / listaUsario.length;
  const resultado = document.getElementById("resultado");
  resultado.innerText = "El promedio es: " + promedioLista;
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
