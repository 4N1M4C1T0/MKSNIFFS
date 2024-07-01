function cambiarTexto() {
    var seleccion = document.getElementById("opciones").value;
    var texto = document.getElementById("texto");
    
    if (seleccion === "costa") {
        texto.innerHTML = "15 025 311";
    } else if (seleccion === "sierra") {
        texto.innerHTML = "999 999 999";
    }
}