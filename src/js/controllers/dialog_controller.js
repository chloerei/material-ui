import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    let background = document.createElement('div')
    background.classList.add('dialog__background')
    background.dataset.action = 'click->dialog#close'
    this.element.appendChild(background)
  }

  toggle() {
    if (this.element.classList.contains('dialog--open')) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    this.element.classList.add('dialog--open')
  }

  close() {
    this.element.classList.remove('dialog--open')
  }
}
