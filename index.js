let button = document.querySelector(/** css selector -> */ "#Header__Button");
let modalWindow = document.querySelector("#Menu");
let button__menu = document.querySelector("#Button__menu");
let menuButtons = modalWindow.querySelectorAll(".mobile-menu__button");

// открытие мобильного меню
button.addEventListener("click", function (event) {
  open();
});
// закрытие мобильного меню
button__menu.addEventListener("click", function (event) {
  close();
});
// обработка кнопок в мобильном меню
for (i of menuButtons) {
  i.addEventListener("click", function (event) {
    close();
  });
}

function open() {
  modalWindow.setAttribute("aria-hidden", "false");
  document.body.classList.add("block-scroll");
}

function close() {
  modalWindow.setAttribute("aria-hidden", "true");
  document.body.classList.remove("block-scroll");
}
