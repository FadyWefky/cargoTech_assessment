document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginButton = document.getElementById('loginButton');
    const message = document.getElementById('message');

    loginButton.classList.add('is-loading');

    try {
        
        await new Promise(resolve => setTimeout(resolve, 5000));

        const response = await fetch('https://2cdhd3vem9.execute-api.us-east-2.amazonaws.com/dev/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                "email": email,
                "password": password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();

        loginButton.classList.remove('is-loading');

        if (response.status === 200) {
            message.className = 'has-text-success';
            message.textContent = 'Login successful! Redirecting...';

            localStorage.setItem('loginResponse', JSON.stringify(data));

            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
          
        } else {
            message.className = 'has-text-danger';
            message.textContent = data.message || 'Login failed!';
        }
    } catch (error) {
        console.error('Error:', error);
        loginButton.classList.remove('is-loading');
        message.className = 'has-text-danger';
        message.textContent = 'An error occurred. Please try again.';
    }
});

// show password handler
const passwordInput = document.getElementById('password');
const showPasswordButton = document.getElementById('showPasswordButton');

showPasswordButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordButton.textContent = 'Hide Password';
  } else {
    passwordInput.type = 'password';
    showPasswordButton.textContent = 'Show Password';
  }
});