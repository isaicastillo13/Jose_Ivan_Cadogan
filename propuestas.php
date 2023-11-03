<?php

require 'include/app.php';

$inicio = true;
incluirTemplates('header', $inicio =true);

?>

<section class="contenedor-presentacion">
        <img src="" alt="imagen-renovandoPanamaEste">
</section>
<section class="contenedor-propuestas">
    <h3>Mis Porpuestas</h3>

    <div class="accordion-propuesta1">
        <img src="" alt="icono">
        <h4>Propuesta 1</h4>
        <p>parrafo corto de lo que es la propuesta</p>
        <div class="panel">
            <p>Contenido completo de la propuesta</p>
        </div>
        <hr>
    </div>
    <div class="accordion-propuesta2">
        <img src="" alt="icono">
        <h4>Propuesta 2</h4>
        <p>parrafo corto de lo que es la propuesta</p>
        <div class="panel">
            <p>Contenido completo de la propuesta</p>
        </div>
        <hr>
    </div>
    <div class="accordion-propuesta3">
        <img src="" alt="icono">
        <h4>Propuesta 3</h4>
        <p>parrafo corto de lo que es la propuesta</p>
        <div class="panel">
            <p>Contenido completo de la propuesta</p>
        </div>
        <hr>
    </div>
    <div class="accordion-propuesta4">
        <img src="" alt="icono">
        <h4>Propuesta 4</h4>
        <p>parrafo corto de lo que es la propuesta</p>
        <div class="panel">
            <p>Contenido completo de la propuesta</p>
        </div>
        <hr>
    </div>
    <div class="accordion-propuesta5">
        <img src="" alt="icono">
        <h4>Propuesta 5</h4>
        <p>parrafo corto de lo que es la propuesta</p>
        <div class="panel">
            <p>Contenido completo de la propuesta</p>
        </div>
        <hr>
    </div>
    <div class="accordion-propuesta6">
        <img src="" alt="icono">
        <h4>Propuesta 6</h4>
        <p>parrafo corto de lo que es la propuesta</p>
        <div class="panel">
            <p>Contenido completo de la propuesta</p>
        </div>
        <hr>
    </div>
</section>
<section class="contenedor-banner-rpe"></section>

<?php
incluirTemplates('footer');
?>