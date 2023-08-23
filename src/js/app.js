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

  console.log(valorSexoRespuesta);
  console.log(valorSegundaRespuesta);
  console.log(valorTerceraRespuesta);
  console.log(valorCuartaRespuesta);
  console.log(valorGrupoRespuesta);

  //Respuesta Especiales Hombres
  if((valorTerceraRespuesta === 4) && (valorSexoRespuesta === "Hombre")){
    respuestaEpecialGeneralHombre();

  }else if((valorSegundaRespuesta === 6) && (valorSexoRespuesta === "Hombre") && (valorGrupoRespuesta === "lit")){
    respuestaEpeciales(valorGrupoRespuesta);

  }else if((valorSegundaRespuesta === 6) && (valorSexoRespuesta === "Hombre") && (valorGrupoRespuesta === "next")){
    respuestaEpeciales(valorGrupoRespuesta);

  }else if((valorSegundaRespuesta === 6) && (valorSexoRespuesta === "Hombre") && (valorGrupoRespuesta === "edge")){
    respuestaEpeciales(valorGrupoRespuesta);
  }


  //Respuesta Especiales Mujers
  if((valorTerceraRespuesta === 4) && (valorSexoRespuesta === "Mujer")){
    respuestaEpecialGeneralMujer();

  }else if((valorSegundaRespuesta === 6) && (valorSexoRespuesta === "Mujer") && (valorGrupoRespuesta === "lit")){
    respuestaEpecialesMujer(valorGrupoRespuesta);

  }else if((valorSegundaRespuesta === 6) && (valorSexoRespuesta === "Mujer") && (valorGrupoRespuesta === "next")){
    respuestaEpecialesMujer(valorGrupoRespuesta);

  }else if((valorSegundaRespuesta === 6) && (valorSexoRespuesta === "Mujer") && (valorGrupoRespuesta === "edge")){
    respuestaEpecialesMujer(valorGrupoRespuesta);
  }

  //Promedia los valores de las respuesta
  valorPromedio = Math.round(((valorSegundaRespuesta + valorTerceraRespuesta + valorCuartaRespuesta) / 3))


  respuesta(valorPromedio, valorSexoRespuesta, valorGrupoRespuesta);
}


function respuestaEpecialGeneralHombre(){
   console.log("Hay que tener el concepto del amor porque Dios es amor y todo lo que Dios ha hecho es bueno, no le tienes miedo al amor, le tienes miedo a ser lastimado. Para eso esta la fe, la fe que Dios tiene a la persona correcta preparada para ti porque él nos ama. 1 Juan 4:18");
}

function respuestaEpeciales(valorGrupoRespuesta){
  if(valorGrupoRespuesta=="lit"){

    console.log("Es una experiencia de cambio hormonal. Hay que confiar en Dios y en su palabra donde dice que tenemos dominio propio, de la misma manera confiamos que somos salvos por el. deja que el espiritu santo te guie mientras navegamos por este camino. busca a alguien a quien puedas rendirle cuentas e como vas en tu proceso idealmente a tu lider. 2 Timoteo 1:7");

    console.log("Como te veo me vi, como me ves, te verás");

  }else if(valorGrupoRespuesta=="next"){
    console.log("Salmos 32:1-3. No necesitas novia porque ahí si te vas a quemarte tu y la vas a quemar a ella. Llenate del espiritu santo y de su palabra busca actividades que van a consumir energia y concentracion mental quedate cerca de tus amistades que te van a animar a mantenerte en santidad, cuida lo que ves");

    console.log("No te exprimas el Barro");
  }else{
    console.log("YA CASATE!, dirige tus oraciones hacia la relacion que deseas, ora a Dios, que sea tu prioridad y se honesto, me estoy quemando ya mandame la persona que tienes preparada para mi. Mateo 7:8.");
    

      console.log("Tenemos descuento en confal en el lobby principal");
  }

    

}

function respuestaEpecialGeneralMujer(){
  console.log("Tal vez estas viviendo tu futuro basado en tu pasado. Una experiencia con Jesuses mas alla de un culto, cuando encuentras a Jesus te das cuenta que hay mucho mas y respuestas a tus preguntas, te das cuenta qye no tienes proque repetir los errores de quien te criaron. Como consejo: conversa con tu lider de confianza y expon tus temores, que es lo que te limita. hablarlo te hace exponer la carta que el enemigo usa para engañarte. Dios creo el amor para nosotros, es un deleite para nosotros, no dejes que el diablo te engañe limitandote para alcanzar el deseo de Dios para ti. Lapalabra es la luz que te aclara.");
}

function respuestaEpecialesMujer(valorGrupoRespuesta){
 if(valorGrupoRespuesta=="lit"){

   console.log("A tu edad ese tipo de relaciones distrorciona el proposito de las relaciones sexuales. te puede maracar y limitar para cuendo seas next y edge veras reflejado. Es como acumular bagaje para cuando realmente te corresponde encontrate con la persona ideal. y usualmente a tu edad no es amor, se siente como amor pero es meramente hormonal y emocional");

   console.log("Alabate pato que mañana te caso, no creas que eres eterna");

 }else if(valorGrupoRespuesta=="next"){
   console.log("Tener relaciones sexuales a tu edad es realmente peligroso, te puede trubcar e futuro, es crucial, Quemarte en este momento no te conviene ni personal ni espiritualmente. Enfocate en lo que quieres y necesitas, Las relaciones sexuales, te cambian el humor, te cambia emocionalmente, te vas al piso por hacerlo fuera de la voluntad de Dios. Es una edad de transicion. ve mas alla del placer que te esta dando en este momento, el desanimo es la peor herramienta.");

   console.log("Traquila Hoy ministramos a las Solteras.");
 }else{
   console.log("Estas demorando, estas abriendo puertas generacionales. Ya tienes la madurez biologica para formar un hogar. Demoras una desicion matrimonial y estas jugando conel tiempo, Ya estas un poco mas conciente para actuar. Los edge que estan teniendo relaciones sexuales ya tienen hijos de diferentes parejas. ¡CASATE NO DEJES QUE TE PASE FACTURA!");
   

     console.log("Ya Son las 8:30, hora de MIMIR");
 }

   

}

function respuesta(valorPromedio, valorSexoRespuesta, valorGrupoRespuesta) {
  


  /*if ((valorSexoRespuesta === "Hombre") && (valorGrupoRespuesta === "edge")) {

    if (valorPromedio == 5) {
      console.log("Se Honesto contigo mismo, reconoce que tienes un problema de orgullo y arrepientete genuinamente de lo que ocultas! BUSCA LA AYUDA Y SUPERVISION DE TUS LIDERES")
    }

  } else if ((valorSexoRespuesta === "Hombre") && (valorGrupoRespuesta === "next")) {
    console.log("respuestas next")

  } else if ((valorSexoRespuesta === "Hombre") && (valorGrupoRespuesta === "lit")) {



  } else if ((valorSexoRespuesta === "Mujer") && (valorGrupoRespuesta = "edge")) {

    if (valorPromedio == 5) {
      console.log("Si no eres capaz de confiar en él, debes examinar tu relacion, o trabaja en tu autoestima")
    }

  }else if ((valorSexoRespuesta === "Mujer") && (valorGrupoRespuesta = "next")) {


  }else if ((valorSexoRespuesta === "Mujer") && (valorGrupoRespuesta = "lit")) {

    
  }*/

}