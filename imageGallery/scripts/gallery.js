const gridSquares = document.getElementsByClassName('placeholder')
const imgSquares = document.getElementsByClassName('image-container')

let root = document.documentElement

var imgSquaresXOrigin = []
var imgSquaresYOrigin = []
var gridSquaresXOrigin = []
var gridSquaresYOrigin = []
var gridSlotCoordinates = ['']
var tileDimensions = document.querySelectorAll(
  '.image-container',
  '.button-container'
)
var gridPlaceholder = gridSquares[0].getBoundingClientRect()

window.addEventListener('resize', function(e) {
  pageLoad()
  // assignImagesXY()
})

function pageLoad() {
  for (let i = 0; i < gridSquares.length; i++) {
    gridSquaresXOrigin[i] = gridSquares[i].getBoundingClientRect()
    gridSquaresYOrigin[i] = gridSquares[i].getBoundingClientRect()
    console.log(gridSquaresXOrigin[i].x, gridSquaresYOrigin[i].y)
    gridSlotCoordinates[i] =
      gridSquaresXOrigin[i].x + 'px' + ', ' + gridSquaresYOrigin[i].y + 'px'
  }
  var rootGridPos = gridSlotCoordinates.splice(10, 1)
  root.style.setProperty(
    '--grid-slot-root-pos',
    'translate(' + rootGridPos + ')'
  )
  gridPlaceholder = gridSquares[11].getBoundingClientRect()

  for (let i = 0; i < gridSquares.length - 1; i++) {
    tileDimensions[i].style.setProperty('width', gridPlaceholder.width + 'px')
    tileDimensions[i].style.setProperty('height', gridPlaceholder.height + 'px')
  }
  console.log('reloaded')
  setCoordinates()
}

function setCoordinates() {
  for (let i = 0; i < gridSlotCoordinates.length; i++) {
    root.style.setProperty(
      '--grid-slot-a-pos',
      'translate(' + gridSlotCoordinates[0] + ')'
    )
    root.style.setProperty(
      '--grid-slot-b-pos',
      'translate(' + gridSlotCoordinates[1] + ')'
    )
    root.style.setProperty(
      '--grid-slot-c-pos',
      'translate(' + gridSlotCoordinates[2] + ')'
    )
    root.style.setProperty(
      '--grid-slot-d-pos',
      'translate(' + gridSlotCoordinates[3] + ')'
    )
    root.style.setProperty(
      '--grid-slot-e-pos',
      'translate(' + gridSlotCoordinates[4] + ')'
    )
    root.style.setProperty(
      '--grid-slot-f-pos',
      'translate(' + gridSlotCoordinates[5] + ')'
    )
    root.style.setProperty(
      '--grid-slot-g-pos',
      'translate(' + gridSlotCoordinates[6] + ')'
    )
    root.style.setProperty(
      '--grid-slot-h-pos',
      'translate(' + gridSlotCoordinates[7] + ')'
    )
    root.style.setProperty(
      '--grid-slot-i-pos',
      'translate(' + gridSlotCoordinates[8] + ')'
    )
    root.style.setProperty(
      '--grid-slot-j-pos',
      'translate(' + gridSlotCoordinates[9] + ')'
    )
    root.style.setProperty(
      '--grid-slot-k-pos',
      'translate(' + gridSlotCoordinates[10] + ')'
    )
    root.style.setProperty(
      '--grid-slot-l-pos',
      'translate(' + gridSlotCoordinates[11] + ')'
    )
    root.style.setProperty(
      '--grid-slot-m-pos',
      'translate(' + gridSlotCoordinates[12] + ')'
    )
    root.style.setProperty(
      '--grid-slot-n-pos',
      'translate(' + gridSlotCoordinates[13] + ')'
    )
    root.style.setProperty(
      '--grid-slot-o-pos',
      'translate(' + gridSlotCoordinates[14] + ')'
    )
    root.style.setProperty(
      '--grid-slot-p-pos',
      'translate(' + gridSlotCoordinates[15] + ')'
    )
    root.style.setProperty(
      '--grid-slot-q-pos',
      'translate(' + gridSlotCoordinates[16] + ')'
    )
    root.style.setProperty(
      '--grid-slot-r-pos',
      'translate(' + gridSlotCoordinates[17] + ')'
    )
    root.style.setProperty(
      '--grid-slot-s-pos',
      'translate(' + gridSlotCoordinates[18] + ')'
    )
    root.style.setProperty(
      '--grid-slot-t-pos',
      'translate(' + gridSlotCoordinates[19] + ')'
    )
    root.style.setProperty(
      '--grid-slot-u-pos',
      'translate(' + gridSlotCoordinates[20] + ')'
    )
  }
}

function assignImagesXY() {
  for (let i = 0; i < imgSquares.length; i++) {
    imgSquares[i].classList.add('shuffle-a')
  }
  console.log(root.style.getPropertyValue('--grid-slot-k-pos'))
  assignImagesXY.called = true
}
function returnImagesXY() {
  for (let i = 0; i < imgSquares.length; i++) {
    imgSquares[i].classList.remove('shuffle-a')
  }
  assignImagesXY.called = false
}

function imgShuffle(gridSlotCoordinates) {
  returnImagesXY()
  var currentIndex = gridSlotCoordinates.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = gridSlotCoordinates[currentIndex]
    gridSlotCoordinates[currentIndex] = gridSlotCoordinates[randomIndex]
    gridSlotCoordinates[randomIndex] = temporaryValue
  }

  setCoordinates()
  assignImagesXY()
}

pageLoad()
