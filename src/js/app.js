function valorRespuesta(){

// Obtén todos los radio buttons por su nombre
const primeraRespuesta = document.getElementsByName("primeraSeleccion");
const segundaRespuesta = document.getElementsByName("segundaSeleccion");
const terceraRespuesta = document.getElementsByName("terceraSeleccion");
const cuartaRespuesta = document.getElementsByName("cuartaSeleccion");


// Declara una variable para almacenar el valor seleccionado
let valorPrimeraRespuesta;
let valorSegundaRespuesta;
let valorTerceraRespuesta;
let valorCuartaRespuesta;
let promedio

// Recorre los radio buttons y verifica cuál está seleccionado
primeraRespuesta.forEach(radioButton => {
  if (radioButton.checked) {
    valorPrimeraRespuesta = Number.parseInt(radioButton.value);
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

// Verifica si se ha seleccionado un valor
promedio = ((valorPrimeraRespuesta+valorSegundaRespuesta+valorTerceraRespuesta+valorCuartaRespuesta)/4)
console.log(promedio);
}

