import { delegateEvent } from './utils.js'

delegateEvent(document, '[data-toggle="drawer"]', 'click', function(event){
  document.querySelector(this.dataset.target).classList.toggle('open')
})

delegateEvent(document, '.drawer-background', 'click', function(event){
  this.closest('.drawer').classList.remove('open')
})
