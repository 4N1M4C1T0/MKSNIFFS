//creacion de variables de tipo let

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let mniniaturas = document.querySelectorAll('.miniatura .item');

// configurar paramentros
let countItem = items.length;
let itemActive = 0;

// Evento click siguiente
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
// Evento click anterior
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
//auto run slider
let refreshIterval = setInterval(() => {
    next.click();
}, 15000)
function showSlider(){
    //remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let mniniaturaActiveOld = document.querySelector('.miniatura .item.active');
    itemActiveOld.classList.remove('active');
    mniniaturaActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    mniniaturas[itemActive].classList.add('active');

    //clear auti time run slider
    clearInterval(refreshIterval);
    refreshIterval = setInterval(() => {
        next.click();
    }, 15000)
}

// click miniatura
mniniaturas.forEach((mniniatura, index) => {
    mniniatura.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})