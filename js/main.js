// mobile menu-toggle
let hamburger = document.querySelector(".hamburger");
let toggle = document.querySelector(".menuToggle");

function toggleEvent() {
    if(toggle.style.display == "block") {
        toggle.style.display = "none";       
    } else {
        toggle.style.display = "block";
    }
}
hamburger.onclick = toggleEvent;