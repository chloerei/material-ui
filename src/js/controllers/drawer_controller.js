import { Controller } from "stimulus"
import animate from "../animate"

export default class extends Controller {
  connect() {
    this.element.insertAdjacentHTML('beforeend', `
      <div class="drawer__scrim" data-action="click->drawer#close"></div>
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
        this.element.classList.add('drawer--open')
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
    animate(this.element.querySelector('.drawer__scrim'), 'animate--fade-in')
    animate(this.element.querySelector('.drawer__container'), 'animate--drawer-in')
    this.store()
  }

  close() {
    animate(this.element.querySelector('.drawer__scrim'), 'animate--fade-out')
    animate(this.element.querySelector('.drawer__container'), 'animate--drawer-out', () => {
      this.element.classList.remove('drawer--open')
      this.store()
    })
  }
}
