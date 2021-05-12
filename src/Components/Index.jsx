import React from 'react'
import yo from './yo2.jpg'
import crud from './CRUD-BASIC.png'
import portafolio from './portafolio.png'
import pagina from './paginaweb.png'
import swal from 'sweetalert';
const Index =()=>{

    const nombre='Andy Santisteban'
    const numero='+51 915 935 693'
    const mostrarAlerta=()=>{
        swal('Correo: andyjosue160720@gmail.com');

    }
 return(
    
    <div class="hidden">
        <div className="centrado" id="load">
                    <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        </div>
        </div>

    <section>    
        <div className="container">
            <h1 className="Titulo "> <span class="maquina-escribir">Andy Santisteban    .</span></h1>
            <h2 > Desarrollador web </h2>
        </div>
    </section>
    <section>
        <nav class="navegacion-principal contenedor">
            <a href="#">Inicio</a>  
            <a href="#contenedor">Sobre mi</a> 
            <a href="#conocimientos">Mis conocimientos</a> 
            <a href="#proyecto">Mis trabajos</a>  
            <a href="https://api.whatsapp.com/send?phone=51915935693&text=Hola%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios.">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                </svg>
                
            </a>  
        </nav>
    </section>
    <section class="inicio">

    </section>
    <section class="contenedor" id="contenedor">
    <h1>Sobre Mi</h1>
        <div class="nosotros">
            <div class="nosotros__contenido">
                <p>Soy {nombre}, desarrollador web Frontend Junior,Tengo 20 años vivo en Chiclayo, Perú. Toda mi vida me ha gustado aprender sobre la informática y todo lo relacionado.
                    Laboré en algunas empresas en el área de administración general, hace ya un buen tiempo me empecé a dedicar al desarrollo web.
                </p>
                <p>ESTUDIOS:</p>
                <p>Universidad Señor de Sipán(2018-Actualidad) 
                Ingeniería de Sistemas.
                Udemy- Desarrollo Frontend de páginas web, ecommerce y más
                </p>
                <p>WORKSHOPS:</p>
                <p>Metodologías Ágiles.</p>
                <p> -Roles IT.</p>
                <p> -Metodología BEM</p>

                <a href="https://api.whatsapp.com/send?phone=51915935693&text=Hola%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios." class="boton" >CONTÁCTAME</a>

            </div>
            <div class="nosotros__contenidoa">
                <img src={yo}alt="yo" class="nosotros__imagen"></img> 
            </div>            
        </div>
    </section>
    <section class="contenedor " id="conocimientos">
        <h2 class="comprar__titulo">Mis conocimientos</h2>
        <div class="bloques">
        <div class="bloque">
            <img src="https://img.icons8.com/color/144/000000/html-5--v1.png"/>
            <h3 class="bloque__titulo">HTML5</h3>
        </div>
        <div class="bloque">
        <img src="https://img.icons8.com/color/144/000000/css3.png"/>
            <h3 class="bloque__titulo">CSS3</h3>
        </div>
        <div class="bloque">
        <img src="https://img.icons8.com/color/144/000000/javascript.png"/>

            <h3 class="bloque__titulo">JavaScript</h3>
        </div>
        <div class="bloque">
        <img src="https://img.icons8.com/color/144/000000/nodejs.png"/>
            <h3 class="bloque__titulo">Node JS</h3>
        </div>

        <div class="bloque">
        <img src="https://img.icons8.com/office/144/000000/react.png"/>
            <h3 class="bloque__titulo">React JS</h3>
        </div>
        <div class="bloque">
        <img src="https://img.icons8.com/ios-filled/144/000000/jquery.png"/>
            <h3 class="bloque__titulo">JQuery</h3>
        </div>
        <div class="bloque">
        <img src="https://img.icons8.com/officel/144/000000/php-logo.png"/>
            <h3 class="bloque__titulo">PHP</h3>
        </div>
        <div class="bloque">
        <img src="https://img.icons8.com/color/144/000000/microsoft-sql-server.png"/>
            <h3 class="bloque__titulo">SQL Server</h3>
        </div>
        <div class="bloque">
        <img src="https://img.icons8.com/nolan/144/java-coffee-cup-logo.png"/>
            <h3 class="bloque__titulo">Java</h3>
        </div>

    </div>
    
    </section>
    <section class="Mis" id="proyecto">
    <h2 class="comprar__titulo">Mis Proyectos</h2>
        <div class="bloques">
        <div class="bloque">
            <img src={crud} class="img-p"/>
            <h3 class="bloque__titulo">CRUD (PHP y SQL Server)</h3>
            <a href="https://github.com/AndySantisteban/Crud">
            <img class="git" src="https://img.icons8.com/material-rounded/48/000000/github.png"/>
            </a>
        </div>
        <div class="bloque">
        <img src={pagina} class="img-p"/>
            <h3 class="bloque__titulo">Pagina web - Tienda </h3>
            <a href="https://github.com/AndySantisteban/Pagina-web-Basica-ejemplo">
            <img class="git" src="https://img.icons8.com/material-rounded/48/000000/github.png"/>
            </a>
        </div>
        <div class="bloque">
        <img src={portafolio} class="img-p"/>
            <h3 class="bloque__titulo">Portafolio (HTML5 y CSS)</h3>
            <a href="https://github.com/AndySantisteban/PaginaWeb-Static">
            <img class="git" src="https://img.icons8.com/material-rounded/48/000000/github.png"/>
            </a>
        </div>
        

    </div>
    </section>
    <section class="Mis">
    <h2 class="comprar__titulo">CONTACTAME POR</h2>
        <div class="bloques">
        <div class="bloque">
        <a href="https://www.linkedin.com/in/andy-santisteban/">
        <img src="https://img.icons8.com/metro/64/000000/linkedin.png"/>
            
            </a>
            <h3 class="bloque__titulo">LinkedIn</h3>
            <h4>Andy Santisteban</h4>
        </div>
        <div class="bloque">
        <button onClick={()=>mostrarAlerta()}>
        <img src="https://img.icons8.com/fluent/64/000000/gmail--v2.png"/>
            </button>
            <h3 class="bloque__titulo">Gmail </h3>
        </div>
        <div class="bloque">
        <a href="https://api.whatsapp.com/send?phone=51915935693&text=Hola%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios." >
        <img src="https://img.icons8.com/cotton/64/000000/whatsapp--v4.png"/>          
        </a>
        <h3 class="bloque__titulo">Whatsapp</h3>
        <h4>{numero}</h4>
        </div>
        

    </div>
    </section>
    <section>

    </section>
    <footer class="footer">
        <p>Todos los derechos reservados. Andy Santisteban 2021</p> 
    </footer>
    
    </div> 
    )
}
export default Index