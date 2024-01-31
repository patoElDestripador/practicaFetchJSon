function validacion() {
  let nombres = document.getElementById("nombres");
  let apellidos = document.getElementById("apellidos");
  let correo = document.getElementById("correo");
  let errores = {
    nombres: false,
    apellidos: false,
    correo: false,
  };
  if (!nombres.value) {
    errores.nombres = true;
    nombres.classList.add("is-invalid");
  } else {
    nombres.classList.remove("is-invalid");
    nombres.classList.add("is-valid");
    nombres.focus();
  }
  if (!apellidos.value) {
    errores.apellidos = true;
    apellidos.classList.add("is-invalid");
    apellidos.focus();
  } else {
    apellidos.classList.remove("is-invalid");
    apellidos.classList.add("is-valid");
  }
  if (!correo.value) {
    errores.correo = true;
    correo.classList.add("is-invalid");
    correo.focus();
  } else {
    correo.classList.remove("is-invalid");
    correo.classList.add("is-valid");
  }
  if (
    errores.nombres == false &&
    errores.apellidos == false &&
    errores.correo == false
  ) {
    guardarUsuario();
  }
}
