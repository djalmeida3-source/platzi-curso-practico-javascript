// const precioOriginal = 120;
// const descuento = 18;

const calcularPrecioConDescuento = (precio, descuento) => ((precio * (100 - descuento))) / 100;

const onClickButtonPriceDiscount = () => {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });