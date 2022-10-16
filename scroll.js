'use strict'


var header = document.getElementsByTagName("header")[0]

window.onscroll = function () {
    if (window.scrollY > 69) {
        header.classList.remove("scrolled")
    } else {
        header.classList.add("scrolled")
    }
}

