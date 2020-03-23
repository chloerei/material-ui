import { Controller } from "stimulus"

export default class DrawerController extends Controller {
  connect() {
    let toggle = document.querySelector(`[data-toggle='#${this.element.id}']`)
    toggle.addEventListener('click', () => {
      this.toggle()
    })
  }

  toggle(event) {
    this.element.classList.toggle('open')
  }

  open() {
    this.element.classList.add('open')
  }

  close() {
    this.element.classList.remove('open')
  }
}
