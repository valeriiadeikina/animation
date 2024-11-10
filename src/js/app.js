import Widget from "./Widget.js";

const button = document.querySelector("#button");

const widget = new Widget();
let isContainerShowed = false;

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isContainerShowed) {
    widget.showWidget();
    isContainerShowed = true;
    return;
  } else {
    widget.removeWidget();
    isContainerShowed = false;
    return;
  }
});
