import { delegateEvent } from './utils.js'

class Dropdown {
  constructor(element) {
    this.element = element

    this.closeMenuOutside = () => {
      if (!this.element.contains(event.target)) {
        this.close();
      }
    }
  }

  static install(element) {
    if (!element.dropdown) {
      element.dropdown = new Dropdown(element)
    }
    return element.dropdown
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
    document.addEventListener('click', this.closeMenuOutside)
  }

  close() {
    this.element.classList.remove('open')
    document.removeEventListener('click', this.closeMenuOutside)
  }
}

delegateEvent(document, '[data-toggle="dropdown"]', 'click', function(event){
  let element = this.closest('.dropdown')
  Dropdown.install(element).toggle()
})
