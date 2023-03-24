// $(document).ready(function () {
//     $('.header__burger').click(function (event) {
//         $('.header__burger,.header__menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });

// /*--------------*/

// /* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
//   // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.child');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_dropdown');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

// Android apk

function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    var count=500;
    var timer=setInterval(function() {
        count--;
        document.getElementById("timer").textContent=count;
        if(count==0) {
            clearInterval(timer);
            window.location.href="https://userstat.stknet.ru/";
        }
    }, 1000);
}
function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

    window.location.href = "https://userstat.stknet.ru/";
}

//Menu BG

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_dropleft');
        menuBody.classList.toggle('_dropleft');
    });
}
