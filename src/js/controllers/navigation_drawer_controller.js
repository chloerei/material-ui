import { Controller } from "@hotwired/stimulus"
import animate from "../animate"

export default class extends Controller {
  connect() {
    this.element[this.identifier] = this;
  }

  disconnect() {
    this.element.classList.remove('navigation-drawer--open')
  }

  toggle() {
    if (this.element.classList.contains('navigation-drawer--open')) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    this.element.classList.add('navigation-drawer--open')
    animate(this.element.querySelector('.navigation-drawer__scrim'), 'animate--fade-in')
    animate(this.element.querySelector('.navigation-drawer__container'), 'animate--drawer-in')
  }

  close() {
    animate(this.element.querySelector('.navigation-drawer__scrim'), 'animate--fade-out')
    animate(this.element.querySelector('.navigation-drawer__container'), 'animate--drawer-out', () => {
      this.element.classList.remove('navigation-drawer--open')
    })
  }
}
