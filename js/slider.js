let items = document.querySelectorAll('.slider .list .item');
let ccircles = document.querySelectorAll('.circle .item');

// configurar paramentros
let countItem = items.length;
let itemActive = 0;

//auto run slider
let refreshInterval = setInterval(() => {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
}, 15000);

function showSlider(){
    //remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let ccircleActiveOld = document.querySelector('.circle .item.active');
    itemActiveOld.classList.remove('active');
    ccircleActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    ccircles[itemActive].classList.add('active');
}

// click circle
ccircles.forEach((ccircle, index) => {
    ccircle.addEventListener('click', () => {
        itemActive = index;
        showSlider();
        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
    }, 15000);
    });
});