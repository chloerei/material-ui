export default function animateCSS(element, animationName, callback) {
  element.classList.add('animate', animationName)

  function handleAnimationEnd() {
    element.classList.remove('animate', animationName)
    element.removeEventListener('animationend', handleAnimationEnd)

    if (typeof callback === 'function') callback()
  }

  element.addEventListener('animationend', handleAnimationEnd)
}
