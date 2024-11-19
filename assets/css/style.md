/* aspectos generales del cuerpo */
body {
    display: flexbox;
    justify-content: end;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

header{   
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    color: white; 
    padding: 20px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}
/* Inicio de estilo header */
.logo{
    width: 100px;  
    justify-content: space-between; 
    padding: 10px;   
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 1.5em;
    margin-top: 5px;
}

.logo img{
    background-color: transparent;
    width: 100px;
    height: auto;
    border-radius: 50%;
    margin-top: 10px;
}

/* Star Nav */
.nav{
    display: flex;
}
.opciones {
    padding: 1em;
    font-size: 20px;
    text-align: center; 
}

.opciones a{
    text-decoration: none;
    font-weight: bold;
    margin: 0 15px;
    color:black;
}
nav a:hover {
    text-decoration: underline; 
}

.nav button{
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #007BFF;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

header .boton:hover {
    background-color: #0056b3;
}

/* section Banner del Home  */

.banner{
    padding: 10px;
    margin: auto;
}

.banner img{
    width: 100%;
    height: auto; 
} 

.banner H1{
    position: absolute;
    top: 50%;
    left: 10%;
    color: black;   /* color del font */
    font-size: 3em;
    text-align: left;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Corresponde a las columnas de Visión y Misión Institucional */
.bannerinfo{
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    background-color: #f0f0f0;
    box-sizing: border-box;
    gap: 20px;
    flex: 1;
}

.bannerinfo h2 {
     font-style: italic;
     font-size: xx-large;
     text-align: center;
     color: red;
     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.bannerinfo p{
    font-family: 'Arial', sans-serif; 
    font-size: 16px; 
    line-height: 1.5;
    color: #333; 
    margin: 20px 0; 
    padding: 10px; 
    background-color: #f9f9f9; 
    border: 1px solid #ddd; 
    border-radius: 5px;     
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}
/* Final section Banner del Home  */


/* Inicio de section servicios del hospital */
.servicios {
    width: 100%;
    height: auto; 
    display: flex;
    flex-direction: row; 
    justify-content: space-between;    
}

.servicioscolumn {
    flex: 1; 
    padding: 20px; 
    box-sizing: border-box; 
    background-color: #f0f0f0; 
    margin: 10px;
    transition: background-color 0.3s ease;
}

.servicioscolumn img{

    width: 100%;
    height: auto;
    object-fit: cover;
}

.servicioscolumn h2 {
    font-size: 2em;
    text-align: center;
    color: #333;
    margin: 20px 0;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.servicioscolumn p {
    font-size: 16px;
    text-align: center;
    line-height: 1.5;
    color: #333;
    margin: 20px 0;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
    

.servicios:hover {
    background-color: #d1e7dd; 
}
/* Final de section servicios del hospital */


/* Inicio section Testimonios pacientes*/
.colums {
    margin-top: 10px;
    padding: 20px;   
}      
/* Titulo de section */
.colums h2{
    color: #333;
    font-size: 2em;
    text-align: center;
    margin: 20px 0;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Con estas propiedades las columnas se encuentran una a lado de la otra */
.columns__contenedor{
    display:flex;
    flex-wrap: wrap;
    gap: 100px;
    width: 100%;  
}

/* Div que contiene la imagenes de los testimonios */
.colums__testimonio{
    background-color: #f0f0f0 ;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    border-radius: 5px;
    flex: 1 1 calc(16.66% - 20px);
}

.colums__testimonio img {
    padding: 5px;
    border-radius: 15px;
    width: 65%;
    height: auto;
}

.colums__testimonio p{
    font-style: italic;
    font-size: larger;
}

/* Inicio de footer */

footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
    margin-top: 10px;
}

/* Estilos para el contenido del footer */
.footer-contenido {
    display: flex;
    justify-content: space-around; /* Espacia las secciones del footer */
    flex-wrap: wrap; /* Permite que las secciones se ajusten en pantallas pequeñas */
    padding: 20px;
}

/* Estilos para cada sección del footer */
.footer-seccion {
    flex: 1;
    margin: 10px;
}

/* Estilos para los encabezados de las secciones del footer */
.footer-seccion h3 {
    margin-top: 0;
}

/* Estilos para los enlaces del footer */
.footer-seccion a {
    color: #fff;
    text-decoration: none;
}

.footer-seccion a:hover {
    text-decoration: underline;
}

/* Estilos para la sección de copyright */
.footer-copyright {
    background-color: #222;
    padding: 10px 0;
    margin-top: 20px;
}

/* Inicio página de equipo médico */

.equipo {
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    padding: 20px; 
    overflow: hidden;
}


.equipomedico {
    flex: 1; 
    padding: 20px; 
    box-sizing: border-box; 
    background-color: #fff; 
    margin: 10px; 
    border: 1px solid #ddd;
    border-radius: 5px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    text-align: center; 
}


.equipomedico img {
    max-width: 100%; 
    height: auto; 
    border-radius: 5px; 
}

.cequipomedico h2 {
    font-size: 1.5em; 
    margin: 10px 0; 
}

.equipomedico p {
    font-size: 1em; 
    color: #666; 
}

/* Fin página de equipo médico */

.formulario{
    width: 50%;
    margin: auto;
    background: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 50px;
}
h1 {
    text-align: center;
    color: #333;
}
form {
    display: flex;
    flex-direction: column;
}
label {
    margin: 10px 0 5px;
    color: #333;
}
input, textarea {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
button {
    padding: 10px;
    background: #5cb85c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background: #4cae4c;
}