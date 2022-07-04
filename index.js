let hamburgerOpen = document.querySelector(".hamburger-open");

let invBTN = document.querySelector(".inv-btn");
let invBTNTwo = document.querySelector(".inv-btn-two");
let hamburgerClose = document.querySelector(".hamburger-close");

let modalBTNOne = document.querySelector(".close-modal");
let modalBTNTwo = document.querySelector(".submit-modal");

   console.log("jaj")

hamburgerClose.addEventListener("click", hamburgerUnShow)
hamburgerOpen.addEventListener("click",hamburgerShow)

invBTN.addEventListener("click",showModal)
invBTNTwo.addEventListener("click",showModal)
modalBTNTwo.addEventListener("click",unShowModal)
modalBTNOne.addEventListener("click",unShowModal)
function hamburgerUnShow(){
    console.log("jaj")
    let menu = document.querySelector(".hamburger-menu")
    let background = document.querySelector(".hamburger-background")
    menu.style.left = "-100%";
    background.style.background="none";
    background.style.top = "-100%"
    hamburgerClose.style.display= "none";
    hamburgerOpen.style.display = "block";
    background.style.zIndex = "-1500"
}


function hamburgerShow(){
    let menu = document.querySelector(".hamburger-menu")
    let background = document.querySelector(".hamburger-background")
    menu.style.left = "31%";
    background.style.backgroundColor ="rgba(0, 0, 0, 0.9)";
    background.style.top = "2.1%"
    hamburgerClose.style.display= "block";
    hamburgerOpen.style.display = "none";
    background.style.zIndex = "1500"
    console.log("jaj")
}
function showModal(){
    console.log("jaj")
    let modal = document.querySelector(".modal");
    modal.style.zIndex = "2000"
    modal.style.opacity = "1";
    let modalBackground =document.querySelector(".modal-background");
    modalBackground.style.background = "rgba(0, 0, 0, 0.8)";
    modalBackground.style.zIndex = "1500"
}
function unShowModal(){
    console.log("jaj")
    let modalBackground =document.querySelector(".modal-background");
    modalBackground.style.background = "none";
    modalBackground.style.zIndex = "-2000";
    let modal = document.querySelector(".modal");
    modal.style.opacity = "0";
    modalBackground.style.zIndex = "-1500"
    
}