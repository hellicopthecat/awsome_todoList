const loginForm = document.getElementById("login");
const loginInput = document.querySelector("#login input");
const loginBtn = document.querySelector("#login button");
const welcome = document.getElementById("hello");

function submit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("username_key", username);
  greeting(username);
}

// loginForm.addEventListener("submit", submit);

function greeting(username) {
  welcome.classList.remove("hidden");
  welcome.innerText = `Welcome ${username}`;
}

const savedUserName = localStorage.getItem("username_key");

if (savedUserName === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", submit);
} else {
  greeting(savedUserName);
}
