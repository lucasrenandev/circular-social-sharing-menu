"use strict";

const menu = document.querySelector(".menu");
const toggle = document.querySelector(".menu .toggle");

toggle.addEventListener("click", function() {
    menu.classList.toggle("active");
});