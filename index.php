<?php
    require 'include/app.php';
    $inicio = true;
    incluirTemplates('header', $inicio =true);
?>

<main>
    <section class="banner-principal">
        <picture id="fondoblanco_Letras">
            <source srcset="build/img/JIC-BannerWeb_1.webp" type="image/webp">
            <source srcset="build/img/JIC-BannerWeb_1.png" type="image/png">
            <img loading="lazy" src="build/img/JIC-BannerWeb_1.png" alt="fondo blanco">
        </picture>
    </section>
    <section class="contenedor-propuestas-principales">

        <div class="propuestas-principales">
            <h2>Vida y Familia</h2>
            <a href="propuestas.php">Leer más...</a>
        </div>
     
        <div class="propuestas-principales">
            <h2>Gestión y Transparencia</h2>
            <a href="propuestas.php">Leer más...</a>
        </div>
        <div class="propuestas-principales">
            <h2>Justicia</h2>
            <a href="propuestas.php">Leer más...</a>
        </div>

    </section>
    <section class="contenedor contenedor-conoceme">
        <div class="conoceme-video">
            <video src="src/video/conocemeVideo.mp4" autoplay muted controls preload></video>
        </div>
        <div class="conoceme-texto">
            <h2>Jose Ivan Cadogan Melgarejo</h2>
            <p>Licenciado en Derecho y Ciencias políticas con más de 10 de experiencia, 6 de ellos en Derecho Administrativo, manejo, además, otras ramas del derecho como el energético, comercial y laboral por mencionar algunas</p>
            <a href="conoceme.php" class="btn-naranja">Conocer mas</a>
        </div>
    </section>
    <section class="contenedor contenedor-ejesYPrincipios">
        <div class="ejesYPrincipios">
            <div class="descripcion">
                <h4>Ejes</h4>
                <p>Salud, Educación, Trabajo, Justicia y Vida Familiar. Acompáñanos en la construcción de un futuro mejor, donde juntos transformaremos estos ejes en acciones concretas para el beneficio de todos.</p>
                <a href="ejesPrincipios.php">Leer Más...</a>
            </div>
        </div>
        <div class="ejesYPrincipios">
            <div class="descripcion">
            <h4>Principios</h4>
            <p>Gestión y Transparencia, Rendición de Cuentas, Trabajo Dedicado, Honestidad Incuestionable y Puertas Siempre Abiertas. Juntos, forjaremos un futuro más sólido y confiable para nuestra nación.</p>
                <a href="ejesPrincipios.php">Leer Más...</a>
            </div>
            
        </div>
    </section>

</main>
   

<?php
    incluirTemplates('footer');
?>
</body>
</html>