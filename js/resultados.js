function cambiarTexto() {
    var seleccion = document.getElementById("opciones").value;
    var texto1 = document.getElementById("texto1");
    var texto2 = document.getElementById("texto2");
    var texto3 = document.getElementById("texto3");
    var texto4 = document.getElementById("texto4");
    var texto5 = document.getElementById("texto5");
    var texto6 = document.getElementById("texto6");
    var imagen = document.getElementById("imagen");
    var texto_superior = document.getElementById("texto-superior");
    var titulo = document.getElementById("titulo");
    
    if (seleccion === "opcion1") {
        texto1.innerHTML = "100";
        texto2.innerHTML = "200";
        texto3.innerHTML = "300";
        texto4.innerHTML = "400";
        texto5.innerHTML = "500";
        texto6.innerHTML = "600";
        imagen.src = "../../img/vistas/politica_nacional.jpg";
        imagen.alt = "Descripción de la imagen";
        texto_superior.innerHTML = "Ecozona";
        titulo.innerHTML = "Costa";

    } else if (seleccion === "opcion2") {
        texto1.innerHTML = "700";
        texto2.innerHTML = "800";
        texto3.innerHTML = "900";
        texto4.innerHTML = "1000";
        texto5.innerHTML = "1100";
        texto6.innerHTML = "1200";
        imagen.src = "../../img/vistas/3-imagenes-v4.jpg";
        imagen.alt = "Descripción de la imagen";
        texto_superior.innerHTML = "Ecozona";
        titulo.innerHTML = "Sierra";

    }
}
