cutsTheMustard =
  'querySelector' of document and
  'addEventListener' of window

if cutsTheMustard
  logoEl = document.querySelector('.logo')
  logoEl.addEventListener 'click', ->
    this.classList.remove('boink')
    this.width # needed for some reason
    this.classList.add('boink')
