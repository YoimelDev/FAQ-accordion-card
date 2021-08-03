document.addEventListener('DOMContentLoaded', () => {
    cargar();
})

function cargar() {    
    const mostrar = document.querySelectorAll('.content__faq__box');
    const title = document.querySelectorAll('.content__faq__box__title');
        
        mostrar.forEach((box) => {          
            box.addEventListener('click', () => {  
                removeMostrar();                
                box.classList.add('mostrar');
                agregarMostrar(box);                      
            })    
        })

        function removeMostrar() {
            mostrar.forEach(box => {
                box.classList.remove('mostrar');  
            })
        }

        function agregarMostrar(box){
            title.forEach((title) => {
                title.parentNode.addEventListener('click', () => {
                    title.parentNode.classList.toggle('mostrar');
                })                    
            })
        }

        
}

