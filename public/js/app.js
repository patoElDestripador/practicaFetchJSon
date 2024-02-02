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
let url = "http://localhost:3000/"

function getPersonas() {
  let tbody = document.getElementById("ContenidoTablaID") 
  let contador = 1;
  fetch(`${url}personas?_sort=nombre`)
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      tbody.innerHTML += `<tr>
    <td>#${contador}</td>
    <td>${element.nombre}</td>
    <td>${element.apellido}</td>
    <td>${element.correo}</td>
    <td><div class="btn-group" role="group" aria-label="Basic mixed styles example">
    <button type="button" onclick="deletePersona('${element.id}')" class="btn btn-danger">eliminar</button>
    <button type="button" class="btn btn-warning">editar</button>
    <button type="button" class="btn btn-info">mas info</button>
  </div></td>
  </tr>`
  contador++
    });
  })

}

function createPersona() {

  let data = {
    nombre: document.getElementById("nombres").value,
    apellido: document.getElementById("apellidos").value,
    usuario: "null",
    password: "ghijkl",
    correo: document.getElementById("correo").value,
    img: "https://randomuser.me/api/portraits/men/65.jpg"
  }

  fetch(`${url}personas/`,{
    method : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  })
  .then(response => response.json())
  .then(data => {
    console.log("hola se guardo",data)
  })

}

function deletePersona(id) {
  fetch(`${url}personas/${id}`,{
    method : "DELETE"
  })
  .then(res => res.json())
  .then(data => {
    console.log("se elimino",data)
  })
}


document.getElementById("btnGuardar").addEventListener("click",()=>{
  createPersona()
})

getPersonas()