const myModalEl = document.getElementById('modalRegistro')
const modal = new mdb.Modal(myModalEl)

const btnRegistro = document.getElementById("btnCrear")
const btnDelete = document.getElementById("btnDelete")



btnCrear.addEventListener('click', ()=>{
    modal.show()
})



document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
})

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
} 

on(document, 'click', '.btnBorrar', async e => { 
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
        // Aquí puedes agregar la lógica para eliminar el elemento
        Swal.fire(
            'Eliminado!',
            'El elemento ha sido eliminado.',
            'success'
        );
        }
    });

})

