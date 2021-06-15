import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    this.element[this.identifier] = this;
  }

  remove() {
    this.element.remove()
  }
}
