var menu = document.querySelector(".menu");
var burgerButton = document.querySelector("#burger-menu");

var ipad = window.matchMedia("screen and (max-width: 767px)");

ipad.addListener(validation);

function validation(event){
    if(event.matches){
         burgerButton.addEventListener("click", hideShow);
    }

    else{
        burgerButton.removeEventListener("click", hideShow);

    }
    
}



