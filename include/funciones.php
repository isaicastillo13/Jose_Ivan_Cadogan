<?php 

define('TEMPLATE_URL',__DIR__.'/templates');
define('FUNCIONES_URL',__DIR__.'funciones.php');
define('CARPETA_IMAGENES', __DIR__ . '/../imagenes/');

function incluirTemplates( String $nombre, bool $inicio = false ) {
    include TEMPLATE_URL."/{$nombre}.php";

}

/*function estaAutenticado(){
    session_start();
  
    if(!$_SESSION['login']){
       header('Location: /');
    }

}

function debuguear($variable){
    var_dump($variable);
exit;
}

function s($html){
    $s = htmlspecialchars_decode($html);
    return $s;
}*/