const input = document.querySelectorAll('.input');
const btnEnviar = document.getElementById('btn-enviar');



input.forEach(function (i) {

    btnEnviar.addEventListener('click', function (event) {
        event.preventDefault();
        if (i.value === '') {
            i.parentNode.classList.add('requerido')
        }
    })

})