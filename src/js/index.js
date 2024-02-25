const input = document.querySelectorAll('.input');
const btnEnviar = document.getElementById('btn-enviar');


btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    input.forEach((input) => {
        if(!input.value){
            input.parentElement.classList.add('requerido')
            input.parentElement.classList.remove('digitado-correto')
        }else{
            input.parentElement.classList.add('digitado-correto')
            input.parentElement.classList.remove('requerido')
        }
    })
})









// input.forEach(function (i) {

//     btnEnviar.addEventListener('click', function (event) {
//         event.preventDefault();
//         if (i.value === '') {
//             i.parentNode.classList.add('requerido')
//         }else{
//             i.parentNode.classList.add('digitado-correto')
//         }
//     })

// })