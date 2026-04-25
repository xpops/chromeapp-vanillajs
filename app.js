const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginMessage = document.querySelector("#greeting");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    loginForm.classList.add("hidden");
    loginMessage.innerHTML = "hello, " + username;
    loginMessage.classList.remove("hidden");
}

function toggleColor(event) {
    loginMessage.classList.toggle("blue");
    localStorage.removeItem("username");
}

loginForm.addEventListener("submit", onLoginSubmit);
loginMessage.addEventListener("click", toggleColor);