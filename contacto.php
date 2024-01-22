<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $servicio = $_POST["servicio"];
    $fecha = $_POST["fecha"];
    $horario = $_POST["horario"];

    // Correo donde se enviará el formulario
    $destinatarios = array(
        "sintoniawellness@gmail.com", "montsserratcarranzajimenez@gmail.com"
    );

    $asunto = "Nuevo mensaje del formulario de contacto";
    $cuerpo = "Nombre: $nombre\nCorreo: $correo\nServicio: $servicio\nFecha: $fecha\nHorario: $horario";

    // Establecer el correo del remitente
    $remitente = "noreply@sintoniawcenter.com";

    // Enviar el formulario a los destinatarios
    foreach ($destinatarios as $destinatario) {
        mail($destinatario, $asunto, $cuerpo, "From: $remitente");
    }

    // Redireccionar a otra página después de enviar el formulario
    header("Location: gracias.html");
}
?>