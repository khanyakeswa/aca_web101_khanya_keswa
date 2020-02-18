var carousel = document.querySelector('.carousel')
var cells = carousel.querySelectorAll('.carousel-cell')
var cellCount // cellCount set from cells-range input value
var selectedIndex = 0
var cellWidth = carousel.offsetWidth
var cellHeight = carousel.offsetHeight
var isHorizontal = false
var rotateFn = 'rotateX'
var radius, theta
// console.log( cellWidth, cellHeight );

function rotateCarousel() {
  var angle = 90 * selectedIndex * -1
  carousel.style.transform =
    'translateZ(' + -radius + 'px) ' + rotateFn + '(' + angle + 'deg)'
}

var cellsRange = 4

function changeCarousel() {
  cellCount = 4
  var cellSize = isHorizontal ? cellWidth : cellHeight
  radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount))
  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i]
    if (i < cellCount) {
      // visible cell
      cell.style.opacity = 1
      var cellAngle = 90 * i
      cell.style.transform =
        rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)'
    } else {
      // hidden cell
      cell.style.opacity = 0
      cell.style.transform = 'none'
    }
  }

  rotateCarousel()
}

function onOrientationChange() {
  isHorizontal = false
  changeCarousel()
}

// set initials
onOrientationChange()

function advanceCarousel() {
  requestAnimationFrame(() => {
    showCarouselIfNotVisibleAlready(() => {
      selectedIndex++
      rotateCarousel()
      setTimeout(advanceCarousel, 2000)
    })
  })
}

let isCarouselVisible = false
function showCarouselIfNotVisibleAlready(callback) {
  if (isCarouselVisible) {
    callback()
    return
  }

  setTimeout(() => {
    document.querySelector('.carousel').classList.add('visible')
    isCarouselVisible = true
    callback()
  }, 1000)
}

advanceCarousel()
