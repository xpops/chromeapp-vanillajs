const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginMessage = document.querySelector("#greeting");
const resetBtn = document.querySelector("#reset");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    loginMessage.classList.remove(HIDDEN_CLASS);
    resetBtn.classList.remove(HIDDEN_CLASS);
    loginMessage.innerText = `Welcome back, ${username}`;
}

function toggleColor(event) {
    loginMessage.classList.toggle("blue");
}

function onReset() {
    localStorage.removeItem(USERNAME_KEY);
    location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show greetings
    paintGreetings(savedUsername);
}

loginMessage.addEventListener("click", toggleColor);
resetBtn.addEventListener("click", onReset);
