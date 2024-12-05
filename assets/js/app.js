// 
console.log ("inicio de programa")
    alert ("Bienvenido al sitio web con javaScript");

// Utilización de console.log para inspeccionar diferentes secciones del proyecto
let cabecera = document.getElementById("encabezado");
console.log (cabecera); 

let logo = document.getElementById("corporativo");
console.log (logo); 

let proposito = document.getElementById("mision-vision");
console.log (cabecera); 

let medicos = document.getElementById("consultas");
console.log (medicos); 

let opiniones = document.getElementById("testimonio");
console.log (opiniones); 

let footer = document.getElementById("piepagina");
console.log (footer); 


//funcion para capturar datos del formulario del contacto.html
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
    alert("los datos fueron guarados correctamente") 
    console.log (paciente +""+correo +""+asunto +""+ mensaje);
}

import data from '../js/doctores.json' assert {type:'json'};
//console.log(data); prueba de consola para ver si los datos se estan consumiendo desde el json

let testimonials__item = document.querySelector('.testimonials__item');
doctores.forEach(element => {
    // console.log(element) consumo de datos
    testimonials__item.innerHTML += ""
                
});