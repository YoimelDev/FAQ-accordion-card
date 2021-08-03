document.addEventListener('DOMContentLoaded', () => {
    cargar();
})

function cargar() {
    const title = document.querySelectorAll('.content__faq__box__title');
        
    title.forEach((title) => {                         
        title.addEventListener('click', () => {        
                if (title.parentNode.classList.contains('mostrar')) {                    
                    title.parentNode.classList.remove('mostrar');
                } else {                    
                    removeMostrar(); 
                    title.parentNode.classList.add('mostrar');
                }
            })    
        })

        function removeMostrar() {
            title.forEach(mostrar => {
                mostrar.parentNode.classList.remove('mostrar');  
            })
        }        
}

