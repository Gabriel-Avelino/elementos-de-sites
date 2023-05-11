const container = document.querySelector('.container');
const arrow = document.querySelector('.arrow');

arrow.addEventListener('click', ()=>{
    container.classList.toggle('oculto');
});
/*
container.addEventListener('mouseout', ()=>{
    container.classList.add('oculto');
})

container.addEventListener('mouseover', ()=>{
    container.classList.remove('oculto');
})*/