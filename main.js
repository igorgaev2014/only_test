const accordion = document.querySelector(".accordion__wrapper");
const buttons = document.getElementsByClassName("button");

document.addEventListener("click", (evt) => {
  let button = evt.target.closest(".button");

  if (button) {
    button.classList.toggle("visible");
  }

  if (evt.target == accordion) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("visible");
    }
  }
});
