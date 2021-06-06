<?php 
    // Validar que venga de petición post 
    if ( ! $_POST ){
        header('location:  ./');
        return ;
    }
    
    //Recuperar valores
    $nombre = $_POST['nombre'] ?  $_POST['nombre']: null;
    $apellido = $_POST['apellido'] ?  $_POST['apellido']: null;
    $correo = $_POST['correo'] ?  $_POST['correo']: null;
    $sexo = isset($_POST['sexo']) ?  $_POST['sexo']: null;
    $mensaje = $_POST['mensaje'] ?  $_POST['mensaje']: null;

    //establecer Variable de respuesta
    $response = array();
    $response['status'] = true;
    
    //Validar si están llenos los datos
    foreach  ($_POST as $key => $value ) {//recorre todos los items del POST 
        if ( !$value ) {
            $response['status'] = false;
            $response["error"][$key] = "$key es requeriodo";
        }

    }

    if ( !$sexo ){
        $response['status'] = false;
        $response["error"]["sexo"] = " Sexo es requeriodo";

    }
    
    //Responder
     echo json_encode($response) ;

 
    //Evitar inserción de php 
    //LLamar archivo de conexion Base de datos 
    //Guardar datos 


?>