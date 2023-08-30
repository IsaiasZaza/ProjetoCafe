const dark = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')
    dark.addEventListener('click', () =>{
    const modo = dark.checked ? 'dark' : 'light';
    elemento.setAttribute("data-bs-theme", modo);

})