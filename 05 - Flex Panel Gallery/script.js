let panels = [...document.querySelectorAll(".panel")];

    function toggleOpen() {
      this.classList.toggle("open");
    }

    function toggleActive(e) {
      if (e.propertyName.indexOf("flex") !== -1) {
        this.classList.toggle("open-active");
      }
    }

    panels.map(panel => panel.addEventListener("click", toggleOpen));
    panels.map(panel => panel.addEventListener("transitionend", toggleActive));
  