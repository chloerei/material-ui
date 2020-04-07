import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    this.element.insertAdjacentHTML('beforeend', `
      <div class="drawer__background" data-action="click->drawer#close"></div>
    `)

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
