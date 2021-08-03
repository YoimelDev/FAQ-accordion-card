document.addEventListener('DOMContentLoaded', () => {
    mostrar();
})

function mostrar() {    
    const mostrar = document.querySelector('.content__faq__box');
    const title = document.querySelector('.content__faq__box__title');

    title.addEventListener('click', () => {
        if(mostrar.classList.contains('mostrar')) {
            mostrar.classList.remove('mostrar');           
        } else {
            mostrar.classList.add('mostrar');            
        }
    })
}