import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    this.closeMenuOutside = (event) => {
      if (!this.element.contains(event.target)) {
        this.close();
      }
    }
  }

  toggle() {
    if (this.element.classList.contains('floating-action--open')) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    this.element.classList.add('floating-action--open')
    document.addEventListener('click', this.closeMenuOutside)
  }

  close() {
    this.element.classList.remove('floating-action--open')
    document.removeEventListener('click', this.closeMenuOutside)
  }
}
