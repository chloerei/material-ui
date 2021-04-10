import { Controller } from "stimulus"

export default class extends Controller {
  static values = {
    placeholder: String
  }

  static targets = ["select"]

  connect() {
    this.content = document.createElement('div')
    this.content.className = 'selector__content'
    this.element.appendChild(this.content)

    this.input = document.createElement('input')
    this.input.type = 'text'
    this.input.className = 'selector__input'
    this.input.setAttribute('placeholder', this.placeholderValue)
    this.content.appendChild(this.input)

    this.dropdown = document.createElement('div')
    this.dropdown.className = 'selector__dropdown'
    this.element.appendChild(this.dropdown)

    for (let option of this.selectTarget.selectedOptions) {
      this.appendChip(this.renderChip(option))
    }

    this.options = Array.from(this.selectTarget.options).map(option => ({ text: option.text, value: option.value }))
  }

  appendChip(chip) {
    this.content.insertBefore(chip, this.input)
  }

  renderChip(option) {
    let chip = document.createElement('div')
    chip.className = 'chip'
    chip.dataset.controller = "chip"
    chip.dataset.value = option.value
    chip.innerHTML = `
      ${option.text}
      <div class="chip__action">
        <button type="button" class="button button--icon" data-action="selector#remove">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 7.7 9.11c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"/></svg>
        </button>
      </div>
    `
    return chip
  }
}
