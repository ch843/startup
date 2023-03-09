function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

function login() {
const nameEl = document.querySelector("#username");
localStorage.setItem("userName", nameEl.value);

var loginBtn = document.getElementById("log-in-btn");
if (username) {
  loginBtn.innerHTML = "Welcome, " + username;
}
}