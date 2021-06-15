import { Controller } from "stimulus"
import animate from '../animate'

export default class extends Controller {
  connect() {
    this.element[this.identifier] = this;

    const delay = parseInt(this.data.get('period')) || 5000

    animate(this.element, 'animate--zoom-in', () => {
      setTimeout(() => {
        this.remove()
      }, delay)
    })
  }

  remove() {
    animate(this.element, 'animate--zoom-out', () => {
      this.element.remove()
    })
  }
}
