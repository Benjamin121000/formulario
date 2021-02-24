<?php 

// llamando a los campos 
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

//datos para el correo
$destinatario = "benjaminramirezhorna@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

//enviando mennsaje
mail($destinatario, $asunto, $carta);
header('Location:mensaje-de-envio.html');

?>