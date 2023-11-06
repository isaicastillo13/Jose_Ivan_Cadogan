<?php

require 'include/app.php';

$inicio = true;
incluirTemplates('header', $inicio =true);

?>

<section class="banner-principal">
    <picture>
        <source srcset="build/img/JIC-BannerWeb_2.webp" type="image/webp">
        <source srcset="build/img/JIC-BannerWeb_2.jpg" type="image/jpg">
        <img loading="lazy" src="build/img/JIC-BannerWeb_2.jpgd" alt="fondo blanco">
    </picture>

</section>
<section class="contenedor contenedor-propuestas">
    
    <h2 class="bg-azul">Mis Porpuestas</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus maxime, eum libero ut dolorum enim ratione atque recusandae. Quo facilis similique nobis praesentium ullam, id rerum soluta voluptatem tempora atque.</p>

    <div class="propuestas">
        <img class="img-bgNaranja" src="build/img/iconoEducacionNaranja.png" alt="icono">
        <div class="propuestas-texto">
            <h4>Propuesta 1</h4>
            <p>parrafo corto de lo que es la propuesta</p>
            <hr>
        </div>
    </div>

    <div class="propuestas">

        <img class="img-bgAzul" src="build/img/iconoJusticiaAzul.png" alt="icono">
        <div class="propuestas-texto">
            <h4>Propuesta 3</h4>
            <p>parrafo corto de lo que es la propuesta</p>
            <hr>
        </div>
    </div>
    <div class="propuestas">

        <img class="img-bgNaranja" src="build/img/iconoSaludNaranja.png" alt="icono">
        <div class="propuestas-texto">
            <h4>Propuesta 3</h4>
            <p>parrafo corto de lo que es la propuesta</p>
            <hr>
        </div>
    </div>
    <div class="propuestas">

        <img class="img-bgAzul" src="build/img/iconoFamiliaAzul.png" alt="icono">
        <div class="propuestas-texto">
            <h4>Propuesta 2</h4>
            <p>parrafo corto de lo que es la propuesta</p>
            <hr>
        </div>
    </div>

</section>
<section class="contenedor contenedor-banner-rpe"></section>

<?php
incluirTemplates('footer');
?>