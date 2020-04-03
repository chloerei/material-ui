import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    let delay = parseInt(this.data.get('delay')) || 5000
    setTimeout(() => {
      this.remove()
    }, delay)
  }

  remove() {
    this.element.addEventListener('animationend', () => {
      this.element.remove()
    })
    this.element.classList.add('snackbar--remove')
  }
}
