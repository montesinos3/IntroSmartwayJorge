const modal = document.getElementById('myModal')
if (modal) {
  modal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = modal.querySelector('.modal-title')
    const modalBodyInput = modal.querySelector('.modal-body input')

    modalTitle.textContent = `¿Seguro que quieres elegir a  ${recipient}?`
    modalBodyInput.value = recipient
  })
} 