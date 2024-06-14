document.addEventListener('DOMContentLoaded', function() {
    fetch('../template/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#header').innerHTML = data;
        });

    fetch('../template/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#footer').innerHTML = data;
        });
});
