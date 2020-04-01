import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    let background = document.createElement('div')
    background.classList.add('drawer__background')
    background.dataset.action = 'click->drawer#close'
    this.element.appendChild(background)
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
  }

  close() {
    this.element.classList.remove('drawer--open')
  }
}
