import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    this.element.insertAdjacentHTML('beforeend', `
      <div class="dialog__background" data-action="click->dialog#close"></div>
    `)
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
