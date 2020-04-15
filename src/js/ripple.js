import animate from './animate'

function delegateEvent(element, eventName, elementSelector, handler) {
  element.addEventListener(eventName, function(e) {
    for (var target = e.target; target && target != this; target = target.parentNode) {
      if (target.matches(elementSelector)) {
        handler.call(target, e);
        break;
      }
    }
  }, false);
}

delegateEvent(document, 'mousedown', '.button--contained, .button--text, .button--outlined, .dropdown__item, .drawer__item', function(event) {
  if (this.querySelector('.ripple')) {
    return
  }

  let ripple = document.createElement('div')
  ripple.classList.add('ripple')

  // Click point
  let rect = this.getBoundingClientRect()
  let left = event.pageX - (rect.left + document.body.scrollLeft)
  let top = event.pageY - (rect.top + document.body.scrollTop)

  // ripple size
  let width = parseFloat(getComputedStyle(this, null).width.replace("px", ""))
  let height = parseFloat(getComputedStyle(this, null).height.replace("px", ""))
  let radius = Math.sqrt(width ** 2 + height ** 2)

  ripple.setAttribute('style', `top: ${top - radius}px; left: ${left - radius}px; width: ${radius * 2}px; height: ${radius * 2}px;`)

  this.insertAdjacentElement('beforeend', ripple)

  animate(ripple, 'animate--scale-in')

  document.addEventListener('mouseup', () => {
    animate(ripple, 'animate--fade-out', () => {
      ripple.remove()
    })
  }, { once: true })
})
