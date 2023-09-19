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

const root = document.querySelector("#root");
const container = document.createElement("div");
const ir = document.createElement("h1");
const section = document.createElement("section");
const secTitle = document.createElement("h2");
const secImg = document.createElement("img");
const secCont = document.createElement("p");

container.classList.add("container");
ir.classList.add("ir");
ir.textContent = '테스트 페이지';

secTitle.classList.add("section-title");
secTitle.textContent = '섹션제목';

secImg.classList.add("section-img");

secCont.classList.add("section-contents");
secCont.textContent = '내용';


root.append(container);
container.append(ir, section);
section.append(secTitle, secImg, secCont);







