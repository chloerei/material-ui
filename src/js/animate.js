export default function animate(element, animationName, callback) {
  if (!element) {
    return
  }

  if (element.classList.contains('animate')) {
    // wait another animate end
    element.addEventListener('animationend', () => {
      animateRun(element, animationName, callback)
    })
  } else {
    animateRun(element, animationName, callback)
  }
}

function animateRun(element, animationName, callback) {
  element.classList.add('animate', animationName)

  function handleAnimationEnd() {
    element.classList.remove('animate', animationName)
    element.removeEventListener('animationend', handleAnimationEnd)

    if (typeof callback === 'function') callback()
  }

  element.addEventListener('animationend', handleAnimationEnd)
}
