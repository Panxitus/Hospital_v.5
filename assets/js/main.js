function captura (){
    var paciente=document.getElementById("name").value;
    var correo  =document.getElementById("email").value;
    var asunto =document.getElementById("subject").value;
    var mensaje =document.getElementById("message").value;

    if(paciente==""){
        alert("El nombre es obligatorio");
        document.getElementById("name").focus(); //marca el punterto donde lo necesito
    }else if (correo==""){
        alert("El correo es obligatorio");
        document.getElementById("email").focus();   
    }else if (asunto==""){
        alert("El asunto es obligatorio");
        document.getElementById("subject").focus();   
    }else if (mensaje==""){
        alert("El mensaje es obligatorio");
        document.getElementById("message").focus(); 
    }
    // alert(paciente) Prueba de coneexión del formulario
    console.log (paciente +""+correo +""+asunto +""+ mensaje);
}
