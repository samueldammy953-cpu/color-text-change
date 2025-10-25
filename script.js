        
function changeTheme() {
  let body = document.body;     
  let button = document.querySelector("button");

  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    button.innerText = "Switch to Light Mode";
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    button.innerText = "Switch to Dark Mode";
  }
}
