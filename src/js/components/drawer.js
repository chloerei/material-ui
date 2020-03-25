import { delegateEvent } from './utils.js'

class Drawer {
  constructor(element) {
    this.element = element
    this.background = document.createElement('div')
    this.background.classList.add('drawer-background')
    this.background.addEventListener('click', () => {
      this.close()
    })
    this.element.appendChild(this.background)
  }

  static init(element) {
    if (!element.drawer) {
      element.drawer = new Drawer(element)
    }
    return element.drawer
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

delegateEvent(document, '[data-toggle="drawer"]', 'click', function(event){
  Drawer.init(document.querySelector(this.dataset.target)).toggle()
})
