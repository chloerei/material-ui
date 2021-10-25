import { Controller } from "stimulus"
import animate from "../animate"

export default class extends Controller {
  connect() {
    this.element[this.identifier] = this;
  }

  disconnect() {
    this.element.classList.remove('drawer--open')
  }

  toggle() {
    if (this.element.classList.contains('drawer--open')) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    this.element.classList.add('drawer--open')
    animate(this.element.querySelector('.drawer__scrim'), 'animate--fade-in')
    animate(this.element, 'animate--drawer-in')
  }

  close() {
    animate(this.element.querySelector('.drawer__scrim'), 'animate--fade-out')
    animate(this.element, 'animate--drawer-out', () => {
      this.element.classList.remove('drawer--open')
    })
  }
}
