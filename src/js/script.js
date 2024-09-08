const form = document.getElementById('emailForm');
const btn = document.getElementById('btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const messageError = document.getElementById('message');
    const successSection = document.getElementById('success-section');
    const mainSection = document.getElementById('main-section');
    const valueEmail = document.getElementById('email-value');

    if(validateEmail(emailInput.value)) {
        successSection.classList.remove('disable');
        mainSection.classList.add('disable');
        valueEmail.textContent = emailInput.value
    }else {
        messageError.classList.remove('disable');
        emailInput.classList.add('error-input');
    };
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    location.reload(true);
});
