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
  


const loginResponse = JSON.parse(localStorage.getItem('loginResponse'));

    // Access data as strings
    const userData = loginResponse.data;
    const userName = loginResponse.user.user_name;
    const userPhone = loginResponse.user.user_phone;
    const userEmail = loginResponse.user.user_email;

    // Display data in HTML
    document.getElementById('userName').textContent = `Welcome, ${userName}!`;
    document.getElementById('userPhone').textContent = `Phone : ${userPhone}`;
    document.getElementById('userEmail').textContent = `Email : ${userEmail}`;
