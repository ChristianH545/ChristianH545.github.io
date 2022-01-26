//mis eventos
document
  .getElementById("bntIniciarSesion")
  .addEventListener("click", iniciarSesion);
document.getElementById("bntRegistrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);

// Declaracion de Variables
let contenedorLoginRegister = document.querySelector(
  ".contenedorLoginRegister"
);
let formularioLogin = document.querySelector(".formularioLogin");
let formularioRegister = document.querySelector(".formularioRegister");
let cajaTraseraLogin = document.querySelector(".cajaTraseraLogin");
let cajaTraseraRegister = document.querySelector(".cajaTraseraRegister");

function anchoPagina() {
  if (window.innerWidth > 850) {
    cajaTraseraLogin.style.display = "block";
    cajaTraseraRegister.style.display = "block";
  } else {
    cajaTraseraRegister.style.display = "block";
    cajaTraseraRegister.style.opacity = "1";
    cajaTraseraLogin.style.display = "none";
    formularioLogin.style.display = "block";
    formularioRegister.style.display = "none";
    contenedorLoginRegister.style.left = "0px";
  }
}
anchoPagina();

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formularioRegister.style.display = "none";
    contenedorLoginRegister.style.left = "10px";
    formularioLogin.style.display = "block";
    cajaTraseraRegister.style.opacity = "1";
    cajaTraseraLogin.style.opacity = "0";
  } else {
    formularioRegister.style.display = "none";
    contenedorLoginRegister.style.left = "0px";
    formularioLogin.style.display = "block";
    cajaTraseraRegister.style.display = "block";
    cajaTraseraLogin.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formularioRegister.style.display = "block";
    contenedorLoginRegister.style.left = "420px";
    formularioLogin.style.display = "none";
    cajaTraseraRegister.style.opacity = "0";
    cajaTraseraLogin.style.opacity = "1";
  } else {
    formularioRegister.style.display = "block";
    contenedorLoginRegister.style.left = "0px";
    formularioLogin.style.display = "none";
    cajaTraseraRegister.style.display = "none";
    cajaTraseraLogin.style.display = "block";
    cajaTraseraLogin.style.opacity = "1";
  }
}
/* Validacion del Formulario */

window.addEventListener("load", () => {
  /* Referenciamos los elemento al DOM*/
  const form = document.getElementById("form_registro");
  const user = document.getElementById("usuario");
  const emailForm = document.getElementById("email1");
  const passReg = document.getElementById("password1");
  const passConfirma = document.getElementById("passConfirma");
  console.log(passReg);

  /* Establecemos el evento submit para el form y prevenimos el envio de formulario Regístro */

  form.addEventListener("submit", (e) => {
    /*llamamos la functiones */

    e.preventDefault(); //con esto evitamos el comportamiento que tuviera el form.

    //la (e) indica evento puedes llamarlo como guste solo es buen practica.

    validarCampo(); // esta funcion o metodo cumple la finalidad de validar los campos.

    registrarUsuario(); //este metodo cumple la finalidad de registrar usuario y guardarlo en el local-storage.
  });

  /* método para validar los campos */
  const validarCampo = () => {
    /*  ahora vamos a capturar el valor */
    const usuarioValor = user.value.trim().toUpperCase(); //trim() método o funcion nos ayuda elimina los espacios en blanco en ambos extremos del string.

    /* continuamos capturando valores */
    const emailValor = emailForm.value.trim();
    const passValor = passReg.value.trim();
    const passConfirmaValor = passConfirma.value.trim();

    /* //verificamos que estamos obteniendo el valor del usuario atraves de la consola.
    console.log(usuarioValor);
    console.log(emailValor);
    console.log(passValor);
    console.log(passConfirmaValor);*/

    /*//segundo metodo de Comprobacion 
     !usuarioValor ? console.log("CAMPO VACIO!") : console.log(usuarioValor);// se conoce como operadores ternario investigar */

    /* Validando Campo Usuario */

    //Realizamos las Condicionales
    if (!usuarioValor) {
      console.log("Campo Vacio Nombre del Usuario !");

      validaFalla(usuario, "*Campo Vacio !");
    } else {
      validaOk(usuario, "*Aprobado");
    }

    /* Validando Campo E-mail */

    //Realizamos las Condicionales

    if (!emailValor) {
      console.log("CAMPO VACIO!  E-mail");

      validaFalla(email1, "*Campo Vacio !");
    } else if (!validaEmail(emailValor)) {
      validaFalla(email1, "*El e-mail no es válido");
    } else {
      validaOk(email1, "*Aprobado");
    }

    //al declarar esta variable le damos significado a la expresión regular que veras mas abajo.

    const er = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,18}$/;

    /* Validando campo  Password */

    if (!passValor) {
      console.log("CAMPO VACIO Password!");

      validaFalla(password1, " *Campo Vacio !");
    } else if (passValor.length < 8) {
      //le estamos pidiendo al usuario que al menos tenga 8 caracteres el password.

      /* pasamos nuestra funcion  */

      validaFalla(password1, "*Debe tener 8 caracteres cómo mínimo.");
    } else if (!passValor.match(er)) {
      //El método  match()se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena. Cuando hacemos referencia en nuestro metodo match(er) hablamos de expresión regular.

      /* pasamos nuestra funcion  */
      validaFalla(
        password1,
        "*Debe tener al menos una Mayúscula, una Minúscula y un Número."
      );
    } else {
      /* pasamos nuestra funcion  */

      validaOk(password1, "*Aprobado");
    }
    /* Validando campo  Password Confirmacion*/

    //Condicional password Confirmacion

    if (!passConfirmaValor) {
      validaFalla(passConfirma, "Confirme su password");
    } else if (passValor !== passConfirmaValor) {
      validaFalla(passConfirma, "La password no coincide");
    } else {
      validaOk(passConfirma, "*Aprobado");
    }
  };

  /* método si los Campos no son llenado o son llenado incorrectamente  */
  const validaFalla = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("p");

    aviso.innerText = msje;

    formControl.className = "form-control falla";
  };
  /* método  silos campos son llenado Correctamente*/

  const validaOk = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("p");

    // aviso.style.setProperty("color", "#6ab150");

    aviso.innerText = msje;

    formControl.className = "form-control ok";
  };

  /* funcion para validar e-mail */

  const validaEmail = (email1) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email1
    ); //El método test()ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena mencionada. Devuelve trueo false.

    /*¿Que son las expresión regulares?
         Una expresión regular es una cadena de caracteres que es utilizada para describir o encontrar patrones dentro de otros strings, en base al uso de delimitadores y ciertas reglas de sintaxis. ... De hecho, normalmente no es necesario usar expresiones regulares si vamos a textos exactos.*/
  };

  /* Almacenar Usuario en el  localStorage*/
  const registrarUsuario = () => {
    // Obtener los datos del usuario a registrar
    const nombreUsuario = document.getElementById("usuario").value;
    const emailUsuario = document.getElementById("email1").value;
    const passwordUsuario = document.getElementById("password1").value;

    // En vez de crear una clase, puedes crear un objeto llamado persona,
    // lo hacer con un Json de la siguiente forma
    let persona = {
      nombre: nombreUsuario,
      email: emailUsuario,
      password: passwordUsuario,
    };

    // creare una constante llamada usuarioGuardadoKey
    // esta sera la Key o llave para guardar en local storage y asi siempre usas la misma
    const usuarioGuardadoKey = "usuarioGuardadoKey";

    //obtener local storage para saber si antes guardaste a alguien
    let usuariosGuardadosPreviamente = localStorage.getItem(usuarioGuardadoKey);

    // validar si existen los usuarios guardados
    // en caso que no sea null, usuariosGuardados deberia ser un array de personas entonces
    // haremos push a ese array y luego lo guardamos
    if (usuariosGuardadosPreviamente != null) {
      let usuariosGuardados = localStorage.getItem(usuarioGuardadoKey);
      // obtenemos los usuarios guardados
      let arrayDeUsuarios = JSON.parse(usuariosGuardados);
      //le agregamos la persona que se esta registrando
      arrayDeUsuarios.push(persona);
      //guardamos todo en local storage.
      // Local Storage solo guarda string  y persona es un json
      //Asi que debes convertir el Json a un string con JSON.stringify
      localStorage.setItem(usuarioGuardadoKey, JSON.stringify(arrayDeUsuarios));
      //puedes validar si se guardo: con Json.parse puedes ver el objeto en la consola en vez de un string
      let usuarios = localStorage.getItem(usuarioGuardadoKey);
      console.log(JSON.parse(usuarios));
    }
    //en caso que no existan los usuarios guardados
    else {
      // Un array vacio que es al que le vamos a hacer push de los usuarios
      let usuariosGuardados = [];
      // le agregamos persona
      usuariosGuardados.push(persona);
      // guardamos
      localStorage.setItem(
        usuarioGuardadoKey,
        JSON.stringify(usuariosGuardados)
      );
      //puedes validar si se guardo:
      let usuarios = JSON.parse( localStorage.getItem(usuarioGuardadoKey));

      //validamos por consola
      console.log(usuarios);

    
    }

  
  };
});

/* Validacion del login */

window.addEventListener("load", () => {
  /* llamados de los form y input */

  //variable del form
  const formIngreso = document.getElementById("form_login");

  // variable del email
  const emailIngreso = document.getElementById("email2");

  // variable password
  const passIngreso = document.getElementById("password2");

  //   comprobacion del llamado
  console.log(formIngreso, passIngreso, emailIngreso);

  /* Establecemos el evento submit para el form y prevenimos el envio de formulario login */

  formIngreso.addEventListener("submit", (e) => {
    /*llamamos la functiones */

    e.preventDefault(); //con esto evitamos el comportamiento que tuviera el form.

    validarCampo(); // esta funcion o metodo cumple la finalidad de validar los campos.
  });

  /* método para validar los campos */
  const validarCampo = () => {
    /*  ahora vamos a capturar el valor */

    const emailValor2 = emailIngreso.value.trim();

    const passValor2 = passIngreso.value.trim();

    //  Validando Campo E-mail

    //Realizamos las Condicionales

    if (!emailValor2) {
      console.log("CAMPO VACIO!  E-mail");

      validaFalla(email2, "*Campo Vacio !");
    } else if (!validaEmail(emailValor2)) {
      validaFalla(email2, "*El e-mail no es válido");
    } else {
      validaOk(email2, "*Aprobado");
    }

    //al declarar esta variable le damos significado a la expresión regular que veras mas abajo.

    const er = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,18}$/;

    /* Validando campo  Password */

    if (!passValor2) {
      console.log("CAMPO VACIO Password!");

      validaFalla(password2, " *Campo Vacio !");
    } else if (passValor2.length < 8) {
      //le estamos pidiendo al usuario que al menos tenga 8 caracteres el password.

      /* pasamos nuestra funcion  */

      validaFalla(password2, "*Debe tener 8 caracteres cómo mínimo.");
    } else if (!passValor2.match(er)) {
      //El método  match()se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena. Cuando hacemos referencia en nuestro metodo match(er) hablamos de expresión regular.

      /* pasamos nuestra funcion  */
      validaFalla(
        password2,
        "*Debe tener al menos una Mayúscula, una Minúscula y un Número."
      );
    } else {
      /* pasamos nuestra funcion  */

      validaOk(password2, "*Aprobado");
    }
  };

  /* método si los Campos no son llenado o no coincide con el email del Usuario  */

  const validaFalla = (input, msje) => {
    const formControl = input.parentElement;

    const aviso = formControl.querySelector("p");

    aviso.innerText = msje;

    formControl.className = "form-control falla";
  };

  /* método  si los campos son llenado Correctamente y el usuario coincide*/

  const validaOk = (input, msje) => {
    const formControl = input.parentElement;

    const aviso = formControl.querySelector("p");

    aviso.innerText = msje;

    formControl.className = "form-control ok";
  };

  /* funcion para validar E-mail  si es igual al guardado en el localStorage*/

  const validaEmail = (usuarios) => {
    return usuarios === email2 && usuarios === password2
  };
});
