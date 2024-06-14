function copyLink() {
    var dummy = document.createElement('input');
    var text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    alert('Enlace copiado: ' + text);
}