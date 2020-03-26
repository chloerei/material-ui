import { delegateEvent } from './utils.js'

class Dialog {
  constructor(element) {
    this.element = element
    this.background = document.createElement('div')
    this.background.classList.add('dialog-background')
    this.background.addEventListener('click', () => {
      this.close()
    })
    this.element.appendChild(this.background)
  }

  static init(element) {
    if (!element.dialog) {
      element.dialog = new Dialog(element)
    }
    return element.dialog
  }

  toggle() {
    if (this.element.classList.contains('open')) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    this.element.classList.add('open')
  }

  close() {
    this.element.classList.remove('open')
  }
}

delegateEvent(document, '[data-toggle="dialog"]', 'click', function(event){
  Dialog.init(document.querySelector(this.dataset.target)).toggle()
})
