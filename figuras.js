// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = (lado) => lado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = (lado) => lado * lado;
console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (base, altura) => (base * altura) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");
console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
const diametroCirculo = (radio) => radio * 2;

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

// Área
const areaCirculo = (radio) => (radio * radio) * PI;
console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
