class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener("click", (event) => {
      if (!confirm("You will redirect to the link, this is okay?")) {
        event.preventDefault();
      }
    });
  }
}

customElements.define("uc-confirm-link", ConfirmLink, { extends: "a" });
