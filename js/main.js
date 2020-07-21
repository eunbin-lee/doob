// mobile) menu-toggle
let hamburger = document.querySelector(".hamburger");
let toggle = document.querySelector(".menuToggle");

hamburger.onclick = () => {
    if(toggle.style.display == "block") {
        toggle.style.display = "none";       
    } else {
        toggle.style.display = "block";
    }
}

// web) sec02 - prev, next button click event
let sec02_prev = document.querySelector(".sec02_prev");
let sec02_next = document.querySelector(".sec02_next");
let sec02_cntList = document.querySelector(".sec02_cntList");

sec02_cntList.style.marginLeft = 0;

sec02_next.onclick = () => {
    if(sec02_cntList.style.marginLeft == "-600px") return false;
    else sec02_cntList.style.marginLeft = parseInt(sec02_cntList.style.marginLeft) + -300 + "px";
    console.log(sec02_cntList.style.marginLeft);
}

sec02_prev.onclick = () => {
    if(sec02_cntList.style.marginLeft == "0px") return false;
    else sec02_cntList.style.marginLeft = parseInt(sec02_cntList.style.marginLeft) + 300 + "px";
    console.log(sec02_cntList.style.marginLeft);
}