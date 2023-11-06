<?php

require 'include/app.php';

$inicio = true;
incluirTemplates('header', $inicio =true);

?>

<section class="contenedor-presentacion">
        <img src="build/img/JIC-BannerWeb.jpg" alt="imagen-renovandoPanamaEste">
</section>
<section class="contenedor contenedor-conoceme">

    <h2 class="bg-naranja">Quien Soy?</h2>
    <p>Licenciado en Derecho y Ciencias Políticas, con más de 10 años de experiencia en el área legal. Mi especialización se centra en Derecho Administrativo, Energético, Comercial y Laboral. Mi experiencia como abogado me permite contribuir de manera efectiva en la elaboración de anteproyectos de ley y aportar un enfoque integral y coherente a las soluciones jurídicas.

    Poseo una Maestría en Administración de Empresa, con énfasis en Mercadeo Internacional. Creo que Panamá, debido a su ubicación geográfica, es un país con gran potencial para el desarrollo y expansión comercial e internacional.</p>

    <h2 class="bg-azul">Por que quiero ser Diputado?</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iusto obcaecati consectetur omnis consequuntur itaque quo perspiciatis temporibus voluptatibus, aliquid voluptate. Excepturi tempora quo fuga dolorum nobis, asperiores ratione eum!</p>

</section>

<?php
incluirTemplates('footer');
?>