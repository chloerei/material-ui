import { Controller } from "stimulus"
import animate from "../animate"

export default class extends Controller {
  connect() {
    this.element[this.identifier] = this;

    this.closeMenuOutside = (event) => {
      if (!this.element.contains(event.target)) {
        this.close();
      }
    }
  }

  disconnect() {
    if (this.isOpen()) {
      this.element.classList.remove('dropdown--open')
      document.removeEventListener('click', this.closeMenuOutside)
    }
  }

  toggle() {
    if (this.isOpen()) {
      this.close()
    } else {
      this.open()
    }
  }

  isOpen() {
    return this.element.classList.contains('dropdown--open')
  }

  open() {
    this.element.classList.add('dropdown--open')
    animate(this.element.querySelector('.dropdown__container'), 'animate--scale-in')
    document.addEventListener('click', this.closeMenuOutside)
  }

  close() {
    animate(this.element.querySelector('.dropdown__container'), 'animate--scale-out', () => {
      this.element.classList.remove('dropdown--open')
    })
    document.removeEventListener('click', this.closeMenuOutside)
  }
}
