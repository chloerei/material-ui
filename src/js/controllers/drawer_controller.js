import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    let background = document.createElement('div')
    background.classList.add('drawer-background')
    background.addEventListener('click', () => this.close())
    this.element.insertAdjacentElement('afterend', background)

    if (this.persistenceEnabled()) {
      this.restore()
    }
  }

  persistenceEnabled() {
    return this.data.get('persistence') == 'true' && window.innerWidth > 480
  }

  store() {
    if (this.persistenceEnabled()) {
      localStorage.setItem('drawerOpened', this.element.classList.contains('drawer--open'));
    }
  }

  restore() {
    if (this.persistenceEnabled()) {
      if (localStorage.getItem('drawerOpened') == 'true') {
        this.open()
      }
    }
  }

  toggle() {
    if (this.element.classList.contains('drawer--open')) {
      this.close()
    } else {
      this.open()
    }
    this.store()
  }

  open() {
    this.element.classList.add('drawer--open')
    this.store()
  }

  close() {
    this.element.classList.remove('drawer--open')
    this.store()
  }
}
