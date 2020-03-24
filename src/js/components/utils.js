function delegateEvent(element, elementSelector, eventName, handler) {
  element.addEventListener(eventName, function(event) {
    for (var target = event.target; target && target != this; target = target.parentNode) {
      if (target.matches(elementSelector)) {
        handler.call(target, event);
        break;
      }
    }
  }, false);
}

export { delegateEvent }
