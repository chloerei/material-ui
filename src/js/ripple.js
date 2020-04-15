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

function rippleStart(element, event) {
  if (element.querySelector('.ripple')) {
    return
  }

  let ripple = document.createElement('div')
  ripple.classList.add('ripple')

  // Click point
  let rect = element.getBoundingClientRect()
  let left = event.pageX - (rect.left + document.body.scrollLeft)
  let top = event.pageY - (rect.top + document.body.scrollTop)

  // ripple size
  let width = parseFloat(getComputedStyle(element, null).width.replace("px", ""))
  let height = parseFloat(getComputedStyle(element, null).height.replace("px", ""))
  let radius = Math.sqrt(width ** 2 + height ** 2)

  ripple.setAttribute('style', `top: ${top - radius}px; left: ${left - radius}px; width: ${radius * 2}px; height: ${radius * 2}px;`)

  element.insertAdjacentElement('beforeend', ripple)

  animate(ripple, 'animate--scale-in')

  return ripple
}

const selector = ".button:not(.ripple-none), .dropdown__item:not(.ripple-none), .drawer__item:not(.ripple-none), .tab__item:not(.ripple-none), .floating-action__item:not(.ripple-none), .ripple-effect"

delegateEvent(document, 'mousedown', selector, function(event) {
  let ripple = rippleStart(this, event)

  document.addEventListener('mouseup', () => {
    animate(ripple, 'animate--fade-out', () => {
      ripple.remove()
    })
  }, { once: true })
})

delegateEvent(document, 'touchstart', selector, function(event) {
  let ripple = rippleStart(this, event)

  document.addEventListener('touchend', () => {
    animate(ripple, 'animate--fade-out', () => {
      ripple.remove()
    })
  }, { once: true })
})
