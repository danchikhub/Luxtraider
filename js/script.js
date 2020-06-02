function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

let user_icon = document.querySelector('.user-header__icon');
let user_menu = document.querySelector('.user-header__menu');
user_icon.addEventListener("click", function (e) {
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('_active')
});

document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest('.user-header')) {

        user_menu.classList.remove('_active');
    }
});


$(document).ready(function () {
    $('.icon-menu').click(function (event) {
        $('.icon-menu,.menu__body').toggleClass('active');
        $('body').toggleClass('lock')
    })
})

function ibg() {

    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();