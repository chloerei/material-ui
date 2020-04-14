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
    if (this.element.classList.contains('dropdown--open')) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    this.element.classList.add('dropdown--open')
    animate(this.element.querySelector('.dropdown__menu'), 'animate--scale-in')
    document.addEventListener('click', this.closeMenuOutside)
  }

  close() {
    animate(this.element.querySelector('.dropdown__menu'), 'animate--scale-out', () => {
      this.element.classList.remove('dropdown--open')
    })
    document.removeEventListener('click', this.closeMenuOutside)
  }
}
