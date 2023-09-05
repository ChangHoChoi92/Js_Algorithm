const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add('hidden');
    greeting.innerText = `Hello ${userName}!!`;
    greeting.classList.remove('hidden');
    console.log(userName)
}

loginForm.addEventListener('submit', onLoginSubmit);



