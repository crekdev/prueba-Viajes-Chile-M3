//Activar tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Modal TyC

const myModal = document.getElementById('modalTyc')
const myInput = document.getElementById('btn-accept')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})

//Alert
document.getElementById('alertButton').addEventListener('click', function () {
    showAlert();
});

function showAlert() {
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show fixed-top mx-4" role="alert">
        <strong>¡Formulario enviado exitosamente!.</strong> Pronto nos contactaremos contigo.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
}
