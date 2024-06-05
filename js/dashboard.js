document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.getElementById('editButton');
    const confirmModal = document.getElementById('confirmModal');
    const closeModal = document.getElementById('closeModal');
    const cancelModal = document.getElementById('cancelModal');

    editButton.addEventListener('click', () => {
        confirmModal.classList.add('is-active');
    });

    closeModal.addEventListener('click', () => {
        confirmModal.classList.remove('is-active');
    });

    cancelModal.addEventListener('click', () => {
        confirmModal.classList.remove('is-active');
    });
});
