const listaDeAmigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, introduce un nombre antes de añadir.");
    return;
  }

  listaDeAmigos.push(nombre);
  actualizarLista();
  input.value = "";
  input.focus();
}

function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  listaDeAmigos.forEach((nombre, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${nombre}`;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert("Introduce un nombre.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  const nombreGanador = listaDeAmigos[indiceAleatorio];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li> El amigo secreto es: <strong>${nombreGanador}</strong></li>`;
}
