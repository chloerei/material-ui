import { Controller } from "stimulus"
import animate from "../animate"

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
    animate(this.element.querySelector('.floating-action__menu'), 'animate--scale-in')
    document.addEventListener('click', this.closeMenuOutside)
  }

  close() {
    animate(this.element.querySelector('.floating-action__menu'), 'animate--scale-out', () => {
      this.element.classList.remove('floating-action--open')
    })
    document.removeEventListener('click', this.closeMenuOutside)
  }
}
