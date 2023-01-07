const navbarNav = document.querySelector(".navbar-nav");
const hamburgerButton = document.querySelector("#hamburger-button");
const closeButton = document.querySelector("#close-button");
const textBox = document.querySelector("#textBox");
const errorMessage = document.querySelector(".error-message");
const copyright = document.querySelector(".copyright");

document.body.onload = () => {
  copyright.innerHTML = "Copyright " + new Date().getFullYear() + ". All Rights Reserved";
}

hamburgerButton.onclick = () => {
  navbarNav.classList.add("show-nav");
  hamburgerButton.style.display = "none";
  closeButton.style.display = "block";
}

closeButton.onclick = () => {
  navbarNav.classList.remove("show-nav");
  closeButton.style.display = "none";
  hamburgerButton.style.display = "block";
}

textBox.onchange = (event) => {
  const {value} = event.target;
  if (!value.includes("@")) {
    errorMessage.style.display = "block";
    textBox.style.border = "1px solid red";
  } else {
    errorMessage.style.display = "none";
    textBox.style.border = "0";
  }
}
