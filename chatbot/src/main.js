const openButton = document.querySelector('#open');
const closeButton = document.querySelector('#close');
const chat = document.querySelector('#chat')

openButton.addEventListener('click', (e)=>{
    chat.showModal();
})

closeButton.addEventListener('click', (e)=>{
    chat.close();
    console.log('close')
})