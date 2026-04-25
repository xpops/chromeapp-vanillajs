const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginMessage = document.querySelector("#greeting");
const resetBtn = document.querySelector("#reset");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASS);
    loginMessage.innerHTML = "hello, " + username;
    loginMessage.classList.remove(HIDDEN_CLASS);
}

function toggleColor(event) {
    loginMessage.classList.toggle("blue");
}

loginMessage.addEventListener("click", toggleColor);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show greetings
    loginMessage.classList.remove(HIDDEN_CLASS);
    loginMessage.innerText = `hello, ${savedUsername}`;
}

resetBtn.addEventListener("click", onReset);

function onReset() {
    localStorage.removeItem(USERNAME_KEY);
    location.reload();
}