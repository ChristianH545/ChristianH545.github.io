// interaccion con el contenedor de las tarjetas

$(".btn_card").click(function () {
  const card = $("#contenedor");
  card.slideUp(1000).slideDown(10000);
});
// animacion con el logo
$(".logo").fadeOut(2000).fadeToggle(2000);

// animacion de la bienvenida de la pagina
$(".bienvenida").fadeOut(3000);

$;

//  trabajando ajax promesas y muchas cositas mas

window.addEventListener("load", () => {
  //  variables generada para longitud y latitud
  let  lon;
  let lat;
  // validacion con una condicional
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((posicion) => {
      // console.log(posicion.coords.latitude); imprimimos para verrificar

      // pasamos los parametro de nuestra variables
      lon = posicion.coords.longitude;
      lat = posicion.coords.latitude;

      // capturamos el DOM mediante javascrip vainilla. aunque tambien puedo utilizzar query.

      let temperaturaValor = document.getElementById("temperatura-valor");
      let temperaturaDescripcion = document.getElementById(
        "temperatura-descripcion"
      );
      let ubicacion = document.getElementById("ubicacion");
      let iconoAnimado = document.getElementById("icono-animado");
      let vientoVelocidad = document.getElementById("viento-velocidad");

      // creamos una constante para nuestra url

      const urlTiempo = `https://api.openweathermap.org/data/2.5/weather?q=Argentina&lang=es&units=metric&appid=c852cba1acd4b642147860d015cabfac`;
      // realiazar las peticiones de la api utilizando fetch

      fetch(urlTiempo)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.main.temp);
          let temp = Math.round(data.main.temp);
          temperaturaValor.textContent = `${temp} ºC`;
          let desc = data.weather[0].description;

          temperaturaDescripcion.textContent = desc.toUpperCase();

          ubicacion.textContent = data.name;

          vientoVelocidad.textContent = `${data.wind.speed} m/s`;

          // iconos estaticos
          /*console.log(data.weather[0].icon);
          let iconcode = data.weather[0].icon;
          const urlIcon = `http://openweathermap.org/img/wn/${iconcode}.png`;
          console.log(urlIcon);*/

          //creacion de iconos animados
          console.log(data.weather[0].main);

          switch (data.weather[0].main) {
            case "Clear":
              iconoAnimado.src = "animated/day.svg";
              console.log("Soleado");
              break;
          }
          switch (data.weather[0].main) {
            case "Clouds":
              iconoAnimado.src = "animated/cloudy-day-1.svg";
              console.log("Nublado");
              break;
          }
          switch (data.weather[0].main) {
            case "Rain":
              iconoAnimado.src = "animated/rainy-1.svg";
              console.log("lluvia");
              break;
          }

          switch (data.weather[0].main) {
             case "Night":
               iconoAnimado.src = "animated/night.svg";
               console.log("Noche");
              break;
               }
          // debo continuar hasta insetar todas las imagenes dependiendo su estado de clima averiguar que otras forma podre acortar codigo he pensado un ciclo o algo invertigar
        })
        .catch((error) => {
          console.log(error);
        });
      // volvemos a chequear que todo ande bien

      // console.log(urlTiempo);
    });
  }
});
