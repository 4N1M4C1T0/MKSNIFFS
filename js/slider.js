let items = document.querySelectorAll('.slider .item');
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
    let itemActiveOld = document.querySelector
}