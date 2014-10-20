cutsTheMustard =
  'querySelector' of document and
  'addEventListener' of window

colorPairs = [
  # color pairs for randomized logo
  '#A32BE6'
  '#B4D455'
  '#EE1D1D'
  '#C1846C'
  '#FF00CE'
  '#EEB91D'
  '#FF0000'
  '#00FF00'
  '#0000FF'
  '#FFF'
  '#676767'
]

if cutsTheMustard
  logoEl = document.querySelector('.logo-container')

  boop = (ev) ->
    ev.preventDefault()
    bg = this.querySelector('#bg')
    lines = this.querySelector('#lines')

    currentColor = this.dataset.currentColor
    lastColor = (colorPairs.length - 1)

    if typeof currentColor is 'undefined'
      this.dataset.currentColor = 0
    else if currentColor is lastColor.toString()
      this.dataset.currentColor = 0
    else
      this.dataset.currentColor = parseInt(currentColor) + 1

    color = colorPairs[this.dataset.currentColor]
    lines.style.fill = color

    # rapid clicking causes selected text...
    window.getSelection().removeAllRanges()

  logoEl.addEventListener 'touchend', boop
  logoEl.addEventListener 'click', boop
