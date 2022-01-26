//consumiendo api para actulizar valor de monedas
let currencyUrl = "https://freecurrencyapi.net/api/v2/latest?apikey=";

let apiKey = "54a8c8f0-6819-11ec-9f60-579fdf7bfe03";
let respuestaMonedas = [];

let dolarHoy;
let euroHoy;
let bitcoin;

/* ------Objeto, Propiedad y Metodo ------ */
class Monedas {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  formula1(valorPesos, valorDolar) {
    let resultadoA = valorPesos / valorDolar;
    return resultadoA;
  }
  formula2(valorPesos, valorEuro) {
    let resultadoB = valorPesos / valorEuro;
    return resultadoB;
  }
  formula3(valorEuros, valorPesos) {
    let resultadoC = valorEuros * valorPesos;
    return resultadoC;
  }
  formula4(valorDolar, valorPesos) {
    let resultadoD = valorDolar * valorPesos;
    return resultadoD;
  }
  formula5(valorPesos, valorBitcoin) {
    let resultadoE = valorPesos * valorBitcoin;
    return resultadoE;
  }
}
/* ------manipulacion del DOM  ------ */
function Input1() {
  let inputPesosDolar1 = document.querySelector(".conversion1");
  let inputResultadoConversion1 = document.querySelector(".calculando1");
  let butttonResultado1 = document.querySelector(".button1");

  butttonResultado1.addEventListener("click", () => {
    let monedas = new Monedas();
    let valorPesos = inputPesosDolar1.value;
    let valorDolar = dolarHoy.precio;
    let conversion = monedas.formula1(valorPesos, valorDolar);

    inputResultadoConversion1.value = `${conversion.toFixed(2)} Dolares`;
  });
}
function Input2() {
  let inputPesosEuros2 = document.querySelector(".conversion2");
  let inputResultadoConversion2 = document.querySelector(".calculando2");
  let butttonResultado2 = document.querySelector(".button2");

  butttonResultado2.addEventListener("click", () => {
    let monedas = new Monedas();
    let valorPesos = inputPesosEuros2.value;
    let valorEuros = euroHoy.precio;
    let conversion = monedas.formula2(valorPesos, valorEuros);

    inputResultadoConversion2.value = `${conversion.toFixed(2)} Euros `;
  });
}
function Input3() {
  let inputEurosPesos3 = document.querySelector(".conversion3");
  let inputResultadoConversion3 = document.querySelector(".calculando3");
  let butttonResultado3 = document.querySelector(".button3");

  butttonResultado3.addEventListener("click", () => {
    let monedas = new Monedas();
    let valorPesos = inputEurosPesos3.value;
    let valorEuros = euroHoy.precio;
    let conversion = monedas.formula3(valorPesos, valorEuros);

    inputResultadoConversion3.value = `${conversion.toFixed(2)} Pesos-Ars`;
  });
}
function Input4() {
  let inputDolarPesos4 = document.querySelector(".conversion4");
  let inputResultadoConversion4 = document.querySelector(".calculando4");
  let butttonResultado4 = document.querySelector(".button4");

  butttonResultado4.addEventListener("click", () => {
    let monedas = new Monedas();
    let valorPesos = inputDolarPesos4.value;
    let valorDolar = dolarHoy.precio;
    let conversion = monedas.formula4(valorPesos, valorDolar);

    inputResultadoConversion4.value = `${conversion.toFixed(2)} Pesos-Ars`;
  });
}
function Input5() {
  let inputBitcoinPesos5 = document.querySelector(".conversion5");
  let inputResultadoConversion5 = document.querySelector(".calculando5");
  let butttonResultado5 = document.querySelector(".button5");

  butttonResultado5.addEventListener("click", () => {
    let monedas = new Monedas();
    let valorPesos = inputBitcoinPesos5.value;
    let valorBitcoin = bitcoin.precio;
    let conversion = monedas.formula5(valorPesos, valorBitcoin);

    inputResultadoConversion5.value = `${conversion.toFixed(2)} Pesos-Ars`;
  });
}

function crearDivisas() {
  /* ------variables de mis objetos ------ */
  dolarHoy = new Monedas("Dolar Hoy: ", 201);
  euroHoy = new Monedas("Euro Hoy: ", respuestaMonedas.data["EUR"]);
  bitcoin = new Monedas("Bitcoin: ", respuestaMonedas.data["BTC"]);

  console.log("Valor euro:" + euroHoy.precio);
  console.log("Valor Bitcoin:" + bitcoin.precio);

  //variables para mi contenedor
  const contenedor = document.getElementById("contenedor");
  /* ------ Array  de divisas ------ */

  const divisas = [];

  //un Array de Productos Divisas
  const productosDivisas = [
    {
      nombre: "Dolar Hoy",
      img: "/imagenes/imagen_Dolar.png",
      precio: 201,
      descripcion:
        "Compra y Venta de Dolares transaccion 100% online con la Confianza y Seguridad que usted merece.",
      texto: "Dolar Hoy:",
    },
    {
      nombre: "Bitcoin Hoy",
      img: "/imagenes/Imagen_Bitcoin.png",
      precio: 11576796,
      descripcion:
        "Compra y Venta de Bitcoin transaccion 100% online con la Confianza y Seguridad que usted merece.",
      texto: " Bitcoin Hoy:",
    },
    {
      nombre: "Euro Hoy",
      img: "/imagenes/imagen_Euro.png",
      precio: 231,
      descripcion:
        "Compra y Venta de Euros transaccion 100% online con la Confianza y Seguridad que usted merece.",
      texto: " Euro Hoy:",
    },
  ];

  /* ------ Recorrido del Array  y inyectar al html nombre y precio el dolar y euro hoy ------ */

  divisas.push(dolarHoy, euroHoy, bitcoin);
  for (let Monedas of divisas) {
    const monedas = document.createElement("footer");
    document.body.appendChild(monedas);
    monedas.innerHTML = `<div class="precio">${Monedas.nombre} ${Monedas.precio}</div>`;
  }

  // for of de producto recorre el array y inserta cars para los productos
  for (producto of productosDivisas) {
    contenedor.innerHTML += `<div class="card" style="width: 18rem;">
  <img src= ${producto.img} class="card-img-top" alt="signoDivisas">
  <div class="card-body">
    <h5 class="card-title">${producto.texto} ${producto.precio}</h5>
    <p class="card-text">${producto.descripcion} </p>
    <a href="/login.html" class="btn btn-primary">Comprar</a>
  </div>
</div>`;
  }
}

/* ------ Function Manipulacion del DOM  ------ */

function obtenerMonedas() {
  $.get(currencyUrl + apiKey)
    .done(function (datos) {
      respuestaMonedas = datos;

      console.log(respuestaMonedas);
      console.log(respuestaMonedas.data["ETH"]);
      crearDivisas();
      Input1();
      Input2();
      Input3();
      Input4();
      Input5();
    })
    .fail(function () {});
}

obtenerMonedas();
