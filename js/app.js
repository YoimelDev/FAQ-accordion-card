document.addEventListener('DOMContentLoaded', () => {
    cargar();
})

function cargar() {    
    const mostrar = document.querySelectorAll('.content__faq__box');    
        
        mostrar.forEach((box) => {          
            box.addEventListener('click', () => {  
                removeMostrar();                
                box.classList.add('mostrar');                
            })    
        })

        function removeMostrar() {
            mostrar.forEach(box => {
                box.classList.remove('mostrar');  
            })
        }
}

