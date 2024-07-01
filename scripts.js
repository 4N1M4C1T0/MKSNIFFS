function cambiarTexto() {
    var seleccion = document.getElementById("opciones").value;
    var texto1 = document.getElementById("texto1");
    var texto2 = document.getElementById("texto2");
    var texto3 = document.getElementById("texto3");
    
    if (seleccion === "opcion1") {
        texto1.innerHTML = "Soy un buen tipo";
        texto2.innerHTML = "Me llamo";
        texto3.innerHTML = "Andy";
    } else if (seleccion === "opcion2") {
        texto1.innerHTML = "Soy un mal tipo";
        texto2.innerHTML = "sddssd"; // Vaciamos el texto
        texto3.innerHTML = "aaaaaaa"; // Vaciamos el texto
    }
}