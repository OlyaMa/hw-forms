/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/popover.js
class Popover {
  showPopover(element) {
    let popover = document.querySelector(".popover");
    if (!popover) {
      popover = document.createElement("div");
      popover.classList.add("popover", "show");
      popover.innerHTML = `
      <div class="arrow"></div>
      <h3 class="popover-header">Popover title</h3>
      <div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>`;
      document.body.appendChild(popover);
    } else {
      popover.classList.toggle("show");
    }
    const {
      left,
      top
    } = element.getBoundingClientRect();
    popover.style.bottom = `${top - element.offsetHeight - 2}px`;
    popover.style.left = `${left + element.offsetWidth / 2 - popover.offsetWidth / 2}px`;
  }
}
;// CONCATENATED MODULE: ./src/js/events.js

class Events {
  constructor() {
    this.popover = new Popover();
  }
  submitListener() {
    document?.querySelector("form")?.addEventListener("submit", event => {
      event.preventDefault();
      this.popover.showPopover(document.querySelector("button"));
    });
  }
  windowResizeListener() {
    window.addEventListener("resize", () => {
      this.popover.showPopover(document.querySelector("button"));
      this.popover.showPopover(document.querySelector("button"));
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

function app() {
  const events = new Events();
  events.submitListener();
  events.windowResizeListener();
}
app();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map