import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    this.element[this.identifier] = this;

    this.element.addEventListener('click', () => {
      let targetElement = document.querySelector(this.data.get('target'))
      let identifier = this.data.get('action').split('#')[0]
      let action = this.data.get('action').split('#')[1]
      let controller = targetElement[identifier]
      controller[action].call(controller)
    })
  }
}
