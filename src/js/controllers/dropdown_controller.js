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
    if (this.element.classList.contains('dropdown--open')) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    this.element.classList.add('dropdown--open')
    document.addEventListener('click', this.closeMenuOutside)
  }

  close() {
    this.element.classList.remove('dropdown--open')
    document.removeEventListener('click', this.closeMenuOutside)
  }
}
