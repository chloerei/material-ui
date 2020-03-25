import { delegateEvent } from './utils.js'

class Drawer {
  constructor(element) {
    this.element = element
  }

  static install(element) {
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
    this.background = document.createElement('div')
    this.background.classList.add('drawer-background')
    this.background.addEventListener('click', () => {
      this.close()
    })
    this.element.appendChild(this.background)
  }

  close() {
    this.element.classList.remove('open')
    this.background.remove()
  }
}

delegateEvent(document, '[data-toggle="drawer"]', 'click', function(event){
  Drawer.install(document.querySelector(this.dataset.target)).toggle()
})
