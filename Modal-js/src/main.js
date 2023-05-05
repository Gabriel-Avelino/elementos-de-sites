const openButton = document.querySelectorAll('.open');
const closeButton = document.querySelectorAll('.close');
const iphone = document.getElementById('iphone');
const xiaomi = document.getElementById('xiaomi');
let modal;


openButton.forEach((el) => {
    el.addEventListener('click', (e)=>{
        let id = e.target.id;

        if(id === 'open'){
            iphone.showModal();
            modal = iphone;
        } else if (id === 'open2'){
            xiaomi.showModal();
            modal = xiaomi;
        }
    });
});


closeButton.forEach((el)=>{
    el.addEventListener('click', (e)=>{
        modal.close();
    });
});