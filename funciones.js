function agrandarimagen() {
    var imagen = document.getElementById("foto");
    if (imagen.style.width === "250px") {
        imagen.style.width = "350px";
        imagen.style.height = "350px";
    } else {
        imagen.style.width = "250px";
        imagen.style.height = "250px";
    }
}

function mostrarsobremi() {
    var lista = document.getElementById("sobremi");
    if (lista.style.display === "none") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}

function mostrarcontactos() {
    var miscontactos = document.getElementById("miscontactos");
    if (miscontactos.style.display === "none") {
        miscontactos.style.display = "block";
        
    } else {
        miscontactos.style.display = "none";
    }
}
function mostrarestudio(){
    var misestudios = document.getElementById("estudios");
    if(misestudios.style.display==="none"){
        misestudios.style.display="block";
    }else {misestudios.style.display="none"}
    var botonEstudios = document.getElementById("boton-estudios");

botonEstudios.onmouseover = function() {
  mostrarestudio();
}

botonEstudios.onmouseout = function() {
  var misestudios = document.getElementById("estudios");
  misestudios.style.display = "none";
}
}
function mostraridioma(){
    var misidiomas = document.getElementById("idiomas");
    if(misidiomas.style.display==="none"){
        misidiomas.style.display="block";
    }else {misidiomas.style.display="none"}
    var botonidiomas = document.getElementById("boton-idioma");

botonidiomas.onmouseover = function() {
  mostraridioma();
}

botonidiomas.onmouseout = function() {
    var misidiomas = document.getElementById("idiomas");
  misidiomas.style.display = "none";
}
}
function mostrarherramientas(){
    var misherramientas = document.getElementById("herramientas");
    if(misherramientas.style.display==="none"){
        misherramientas.style.display="block";}
        else {misherramientas.style.display="none"}
        var botonherramientas = document.getElementById("boton-herramientas");

botonherramientas.onmouseover = function() {
  mostrarherramientas();
}

botonherramientas.onmouseout = function() {
    var misherramientas = document.getElementById("herramientas");
  misherramientas.style.display = "none";
}}
      
        function mostrarexperiencia(){
            var misexperiencias = document.getElementById("experiencias");
            if(misexperiencias.style.display==="none"){
                misexperiencias.style.display="block";}
                else {misexperiencias.style.display="none"}

                var botonexperiencia = document.getElementById("boton-experiencia");

                botonexperiencia.onmouseover = function() {
                  mostrarexperiencia();
                }
                
                botonexperiencia.onmouseout = function() {
                    var misexperiencias = document.getElementById("experiencias");
                  misexperiencias.style.display = "none";
                }}        
        
