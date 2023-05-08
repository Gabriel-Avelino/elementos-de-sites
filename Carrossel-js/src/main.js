const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

const imgs2 = document.getElementById("img2");
const img2 = document.querySelectorAll("#img2 img");

let idX = 0;

function carrossel(){
    idX++;

    if(idX> img.length - 3){
        idX = 0;
    }

    imgs.style.transform = `translateX(${-idX*300}px)`;

    if(idX> img2.length - 3){
        idX = 0;
    }

    imgs2.style.transform = `translateX(${-idX*300}px)`;
}

setInterval(carrossel, 1800);