let items = document.querySelectorAll('.slider .list .item');
let next = document. getElementById('next');
let prev = document. getElementById('prev');
let miniatura = document.querySelectorAll('.miniatura .item')

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
function showSlider(){
    //remove item active old
    let itemActiveOld = document.querySelector('Slider . list .item.activate');
    let miniaturaActiveOld = document.querySelector('Slider . list .item.activate');
    itemActiveOld.classList.remove('active');
    miniaturaActiveOld.classList.remove8('active');
    // active new item
    items[itemActive].classList.add('active');
}
