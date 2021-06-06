
/**
 *Contolar ell envio del formulario 
*/
var formulario = document.getElementById('contacto');

formulario.addEventListener('submit', ( e ) => {
    e.preventDefault();
    var datos = new FormData( formulario );
    console.log(datos)
    //cabiar la apariencia del boton
    var icono = document.getElementById('icono');
    var botton = document.getElementById('botton');
    botton.classList.add('disabled')
    icono.innerHTML =`<div class="spinner-grow  spinner-grow-sm" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>`,
    icono.classList.toggle("bi-cursor-fill");
    
    //Petición a archivo de control de base de datos                           
    fetch('contacto.php',{
        method: 'POST',
        body: datos
    })
    .then( response => response.json())
    .then(res => {

        console.log(res)
       //Restautar la apariencia del boton 
        icono.innerHTML= "";
        botton.classList.remove('disabled');

        if ( res.status ){
            botton.classList.remove('btn-primary');
            botton.classList.add('btn-success');
            icono.classList.remove("bi-cursor-fill");
            icono.classList.add("bi-check");
        } else {

            //cabiar la apariencia de los campos no ingresados 
            icono.classList.add("bi-cursor-fill");
            var errores = res.error;
            for ( item in errores ){
              document.getElementsByClassName(item)[0].innerHTML =`${item} es requerido `

            }
        }     
    })
}
)
/**
 * Controlar error de  campos requeridos
*/
var campos = document.getElementsByTagName('input');
for (campo  in  campos ){
    campos[campo].onkeypress = (e)=> {
        let id = e.target.name
        if (e.target.value  != '' ){
            document.getElementsByClassName(id)[0].innerHTML="";
        }
        
    }
}