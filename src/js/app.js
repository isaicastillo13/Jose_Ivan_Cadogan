function promedio() {

  // Obtén todos los radio buttons por su nombre
  const sexoRespuesta = document.getElementsByName("sexoSeleccion");
  const segundaRespuesta = document.getElementsByName("segundaSeleccion");
  const terceraRespuesta = document.getElementsByName("terceraSeleccion");
  const cuartaRespuesta = document.getElementsByName("cuartaSeleccion");
  const grupoRespuesta = document.getElementsByName("grupoSeleccion");



  // Declara una variable para almacenar el valor seleccionado
  let valorSexoRespuesta;
  let valorSegundaRespuesta;
  let valorTerceraRespuesta;
  let valorCuartaRespuesta;
  let valorGrupoRespuesta;
  let valorPromedio;


  // Recorre los radio buttons y verifica cuál está seleccionado
  sexoRespuesta.forEach(radioButton => {
    if (radioButton.checked) {
      valorSexoRespuesta = radioButton.value;
    }
  });


  segundaRespuesta.forEach(radioButton => {
    if (radioButton.checked) {
      valorSegundaRespuesta = Number.parseInt(radioButton.value);
    }
  });

  terceraRespuesta.forEach(radioButton => {
    if (radioButton.checked) {
      valorTerceraRespuesta = Number.parseInt(radioButton.value);
    }
  });

  cuartaRespuesta.forEach(radioButton => {
    if (radioButton.checked) {
      valorCuartaRespuesta = Number.parseInt(radioButton.value);
    }
  });

  grupoRespuesta.forEach(radioButton => {
    if (radioButton.checked) {
      valorGrupoRespuesta = radioButton.value;
    }
  });


  //Promedia los valores de las respuesta
  valorPromedio = Math.round(((valorSegundaRespuesta + valorTerceraRespuesta + valorCuartaRespuesta) / 3))


  console.log("Sexo:" + valorSexoRespuesta);
  console.log("Segunda:" + valorSegundaRespuesta);
  console.log("Tercera:" + valorTerceraRespuesta);
  console.log("Cuarta:" + valorCuartaRespuesta);
  console.log("Grupo:" + valorGrupoRespuesta);

  console.log("Promedio: " + valorPromedio);



  //Respuesta Especiales Hombres
  if ((valorSegundaRespuesta === 8) && (valorCuartaRespuesta === 6) && (valorGrupoRespuesta === "edge")) {
    respuestaSerHonesto(valorSexoRespuesta, valorGrupoRespuesta);

  } else if ((valorTerceraRespuesta === 4)) {
    respuestaTemorAlAmor(valorSexoRespuesta);

  } else if ((valorSegundaRespuesta === 6)) {
    respuestaTeEstasQuemando(valorGrupoRespuesta, valorSexoRespuesta);
  } else if ((valorSegundaRespuesta === 2) && (valorTerceraRespuesta === 6) && (valorCuartaRespuesta === 2)) {
    respuestaEmocionesIntensas(valorSexoRespuesta, valorGrupoRespuesta);
  } else if ((valorSegundaRespuesta === 8) && (valorTerceraRespuesta === 8)) {
    respuestaEnUnaRelacionLit(valorSexoRespuesta);
  }

  //Deshabilitar todas los inputs de respuesta.
  deshabilitar();
}

function respuestaTemorAlAmor(valorSexoRespuesta) {
  if (valorSexoRespuesta === "Hombre") {
    let consejoHombre = "Le temes al Amor. Hay que tener el concepto del amor porque Dios es amor y todo lo que Dios ha hecho es bueno, no le tienes miedo al amor, le tienes miedo a ser lastimado. Para eso esta la fe, la fe que Dios tiene a la persona correcta preparada para ti porque él nos ama. 1 Juan 4:18";

    const newElement = document.createElement("p");
    newElement.classList.add("consejo");
    newElement.textContent = consejoHombre;
    document.querySelector(".modal-contenido").appendChild(newElement);

  } else if (valorSexoRespuesta === "Mujer") {
    let consejo1Mujer = "Le Temes al Amor Amiga. Tal vez estas viviendo tu futuro basado en tu pasado. Una experiencia con Jesuses mas alla de un culto, cuando encuentras a Jesus te das cuenta que hay mucho mas y respuestas a tus preguntas, te das cuenta qye no tienes proque repetir los errores de quien te criaron. Como consejo: conversa con tu lider de confianza y expon tus temores, que es lo que te limita. hablarlo te hace exponer la carta que el enemigo usa para engañarte. Dios creo el amor para nosotros, es un deleite para nosotros, no dejes que el diablo te engañe limitandote para alcanzar el deseo de Dios para ti. Lapalabra es la luz que te aclara.";


    const newElement = document.createElement("p");
    newElement.classList.add("consejo");
    newElement.textContent = consejo1Mujer;
    document.querySelector(".modal-contenido").appendChild(newElement);
  }


}


function respuestaTeEstasQuemando(valorGrupoRespuesta, valorSexoRespuesta) {
  if (valorSexoRespuesta === "Hombre") {
    if (valorGrupoRespuesta == "lit") {

      let consejo1Lit = "Te Estas Quemando Lit. Es una experiencia de cambio hormonal. Hay que confiar en Dios y en su palabra donde dice que tenemos dominio propio, de la misma manera confiamos que somos salvos por el. deja que el espiritu santo te guie mientras navegamos por este camino. busca a alguien a quien puedas rendirle cuentas e como vas en tu proceso idealmente a tu lider. 2 Timoteo 1:7";

      const newElement = document.createElement("p");
      newElement.classList.add("p");
      newElement.textContent = consejo1Lit;
      document.querySelector(".consejo").appendChild(newElement);

      console.log("Como te veo me vi, como me ves, te verás");

    } else if (valorGrupoRespuesta == "next") {
      let consejo1Next = "Te Estas Quemando next. Salmos 32:1-3. No necesitas novia porque ahí si te vas a quemarte tu y la vas a quemar a ella. Llenate del espiritu santo y de su palabra busca actividades que van a consumir energia y concentracion mental quedate cerca de tus amistades que te van a animar a mantenerte en santidad, cuida lo que ves";

      const newElement = document.createElement("p");
      newElement.classList.add("p");
      newElement.textContent = consejo1Next;
      document.querySelector(".consejo").appendChild(newElement);

      console.log("No te exprimas el Barro");
    } else if (valorGrupoRespuesta == "edge") {
      let consejo1Edge = "Te estas Quemando Edge. YA CASATE!, dirige tus oraciones hacia la relacion que deseas, ora a Dios, que sea tu prioridad y se honesto, me estoy quemando ya mandame la persona que tienes preparada para mi. Mateo 7:8.";

      const newElement = document.createElement("p");
      newElement.classList.add("p");
      newElement.textContent = consejo1Edge;
      document.querySelector(".consejo").appendChild(newElement);


      console.log("Tenemos descuento en confal en el lobby principal");
    }

  } else if (valorSexoRespuesta === "Mujer") {

    if (valorGrupoRespuesta == "lit") {

      let consejo1MujerLit = "Te estas Quemando Lit. A tu edad ese tipo de relaciones distrorciona el proposito de las relaciones sexuales. te puede maracar y limitar para cuendo seas next y edge veras reflejado. Es como acumular bagaje para cuando realmente te corresponde encontrate con la persona ideal. y usualmente a tu edad no es amor, se siente como amor pero es meramente hormonal y emocional";

      const newElement = document.createElement("p");
      newElement.classList.add("p");
      newElement.textContent = consejo1MujerLit;
      document.querySelector(".consejo").appendChild(newElement);

      console.log("Alabate pato que mañana te caso, no creas que eres eterna");

    } else if (valorGrupoRespuesta == "next") {
      let consejo1MujerNext = "Te Estas quemando Next. Tener relaciones sexuales a tu edad es realmente peligroso, te puede trubcar e futuro, es crucial, Quemarte en este momento no te conviene ni personal ni espiritualmente. Enfocate en lo que quieres y necesitas, Las relaciones sexuales, te cambian el humor, te cambia emocionalmente, te vas al piso por hacerlo fuera de la voluntad de Dios. Es una edad de transicion. ve mas alla del placer que te esta dando en este momento, el desanimo es la peor herramienta.";

      const newElement = document.createElement("p");
      newElement.classList.add("p");
      newElement.textContent = consejo1MujerNext;
      document.querySelector(".consejo").appendChild(newElement);


      console.log("Traquila Hoy ministramos a las Solteras.");
    } else if (valorGrupoRespuesta == "edge") {

      let consejo1MujerEdge = "Te estas quemando Edge. Estas demorando, estas abriendo puertas generacionales. Ya tienes la madurez biologica para formar un hogar. Demoras una desicion matrimonial y estas jugando conel tiempo, Ya estas un poco mas conciente para actuar. Los edge que estan teniendo relaciones sexuales ya tienen hijos de diferentes parejas. ¡CASATE NO DEJES QUE TE PASE FACTURA!";

      const newElement = document.createElement("p");
      newElement.classList.add("p");
      newElement.textContent = consejo1MujerEdge;
      document.querySelector(".consejo").appendChild(newElement);

      console.log("Ya Son las 8:30, hora de MIMIR");
    }
  }
}


function respuestaSerHonesto(valorSexoRespuesta) {

  if ((valorSexoRespuesta === "Hombre")) {


    let consejo1Edge = "Sé honesto contigo mismo, reconoce que tienes un problema de orgullo y arrepiéntete genuinamente de lo que ocultas! BUSCA LA AYUDA Y SUPERVISIÓN DE TUS LÍDERES.CON QUÉ LIMPIARÁ EL JOVEN SU CAMINO PROV: SALMO 119:9. Para ti tenemos descuento en confal en el lobby principal";

    const newElement = document.createElement("p");
    newElement.classList.add("p");
    newElement.textContent = consejo1Edge;
    document.querySelector(".consejo").appendChild(newElement);

  } else if ((valorSexoRespuesta === "Mujer")) {
    let consejo1MujerEdge = "Si no eres capaz de confiar en él, debes examinar tu relación, o trabajar en tu autoestima. Romanos 12:12. Ya Son las 8:30, hora de MIMIR";

    const newElement = document.createElement("p");
    newElement.classList.add("p");
    newElement.textContent = consejo1MujerEdge;
    document.querySelector(".consejo").appendChild(newElement);

  }

}

//Respuesta para Next que buscan emociones intensas
function respuestaEmocionesIntensas(valorSexoRespuesta) {

  if ((valorSexoRespuesta === "Hombre")) {

    let consejo2Next = "Sin vergüenza, eres un picaflor. Ponte serio con tu relación con Dios, sé humilde para que Dios pueda mostrarte el verdadero amor y así, podrás encontrar el verdadero valor en la persona que Dios tiene para ti.Juan 8:32. \nNo te exprimas el barro ";

    const newElement = document.createElement("p");
    newElement.classList.add("p");
    newElement.textContent = consejo2Next;
    document.querySelector(".consejo").appendChild(newElement);

    console.log("");





  } else if ((valorSexoRespuesta === "Mujer")) {
    let consejo2MujerNext = "Analiza si realmente estas buscando amor o la satisfacción de tu carne Ordena tus sentimientos, no puedes ofrecer nada que no tengas, nadie tiene que completarte, solo lo logras por medio de una relación transformad con jesús, porque nadie es perfecto. proverbios 22:17-18.\nTRANQUILA HOY MINISTRAMOS A LAS SOLTERAS";

    const newElement = document.createElement("p");
    newElement.classList.add("p");
    newElement.textContent = consejo2MujerNext;
    document.querySelector(".consejo").appendChild(newElement);


  }

}

function respuestaEnUnaRelacionLit(valorSexoRespuesta) {
  if ((valorSexoRespuesta === "Hombre")) {

    let consejo3Lit = "1. una relación amorosa es la antesala al matrimonio, a tu edad no estás pensando en matrimonio" +
      "\n 2. no es que tus lideres no te entienden es que tu no entiendes" +
      "\n3.concéntrate en tus estudios, en tu relación con Dios y en tu llamado y cuando llegue la hora estarás preparado. Mateo 6:33.\nComo te veo me vi, como me ves, te verás";

    const newElement = document.createElement("p");
    newElement.classList.add("p");
    newElement.textContent = consejo3Lit;
    document.querySelector(".consejo").appendChild(newElement);

    console.log("");

  } else if ((valorSexoRespuesta === "Mujer")) {
    let consejo3MujerLit = "A esa edad todo lo basamos en emociones no en razonamiento. El líder ve más allá de los sentimientos, muchas veces por eso chocan. Valora el consejo de tu líder. Tu líder complementa tus emociones con razonamiento y emociones de la palabra. Proverbios 4:23.\nALÁBATE PATO QUE MAÑANA TE CASÓ, NO CREAS QUE ERES ETERNA"

    const newElement = document.createElement("p");
    newElement.classList.add("p");
    newElement.textContent = consejo3MujerLit;
    document.querySelector(".consejo").appendChild(newElement);
  }
}

function deshabilitar() {
  document.getElementById("salir").disabled = false;
  document.getElementById("enviar").disabled = true;

  var botonesSexo = document.getElementsByName("sexoSeleccion");
  for (var i = 0; i < botonesSexo.length; i++) {
    botonesSexo[i].disabled = true;
  }
  var botonesPrimeraPregunta = document.getElementsByName("primeraSeleccion");
  for (var i = 0; i < botonesPrimeraPregunta.length; i++) {
    botonesPrimeraPregunta[i].disabled = true;
  }
  var botonesSegundaPregunta = document.getElementsByName("segundaSeleccion");
  for (var i = 0; i < botonesSegundaPregunta.length; i++) {
    botonesSegundaPregunta[i].disabled = true;
  }
  var botonesTerceraPregunta = document.getElementsByName("terceraSeleccion");
  for (var i = 0; i < botonesTerceraPregunta.length; i++) {
    botonesTerceraPregunta[i].disabled = true;
  }
  var botonesCuartaPregunta = document.getElementsByName("cuartaSeleccion");
  for (var i = 0; i < botonesCuartaPregunta.length; i++) {
    botonesCuartaPregunta[i].disabled = true;
  }
  var botonesQuintaPregunta = document.getElementsByName("grupoSeleccion");
  for (var i = 0; i < botonesQuintaPregunta.length; i++) {
    botonesQuintaPregunta[i].disabled = true;
  }
}


  // script.js
document.getElementById('enviar').addEventListener('click', function() {
  document.getElementById('miModal').style.display = 'block';
});

document.getElementById('cerrarModal').addEventListener('click', function() {
  document.getElementById('miModal').style.display = 'none';
});

// Cierra el modal si se hace clic fuera de él
window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('miModal')) {
      document.getElementById('miModal').style.display = 'none';
  }
});
