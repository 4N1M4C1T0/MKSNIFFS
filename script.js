document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(function(item) {
        var submenu = item.nextElementSibling;

        if (submenu && submenu.classList.contains("submenu")) {
            var arrowIcon = document.createElement("i");
            arrowIcon.classList.add("arrow-icon", "fas", "fa-chevron-right");
            item.appendChild(arrowIcon);

            item.addEventListener("click", function(e) {
                e.preventDefault();
                submenu.classList.toggle("active");
                arrowIcon.classList.toggle("collapsed");
                arrowIcon.classList.toggle("fa-chevron-down");
                arrowIcon.classList.toggle("fa-chevron-right");
            });
        }
    });

    var menuToggle = document.querySelector(".menu-toggle");
    var menu = document.querySelector(".menu-desplegable");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("collapsed");
        var menuIcons = document.querySelectorAll(".menu-desplegable .menu-item .arrow-icon");
        menuIcons.forEach(function(icon) {
            icon.classList.remove("collapsed");
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-right");
        });
    });
});
