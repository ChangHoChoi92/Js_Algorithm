const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("#login-form input");
// const loginBtn = loginForm.querySelector('#login-form input');

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    const userName = loginInput.value;
    console.log(tomato)
}

loginInput.addEventListener('submit', onLoginSubmit);


console.log(loginInput);
