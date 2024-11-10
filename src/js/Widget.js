export default class Widget {
  constructor() {}
  showWidget() {
    const widget = document.querySelector(".block");
    widget.classList.remove("hiding-block");
    widget.classList.add("showing-block");
  }

  removeWidget() {
    const widget = document.querySelector(".block");
    widget.classList.remove("showing-block");
    widget.classList.add("hiding-block");
  }
}
