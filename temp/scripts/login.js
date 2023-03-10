function login() {
  const nameEl = document.querySelector("#username");
  localStorage.setItem("userName", nameEl.value);
  console.log("nameEl.value:", nameEl.value);
  window.location.href = "./generator.html"; 
  return nameEl;
}


