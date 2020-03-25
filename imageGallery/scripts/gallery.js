const gridSquares = document.getElementsByClassName('placeholder')
const placeholderContainer = document.querySelector('.placeholder-container')
const imgSquares = document.getElementsByClassName('image-container')
const imgContainer = document.querySelector('.carousel-container')
const img = document.querySelectorAll('.imgSrc')
const imgArray = [
  'https://images.pexels.com/photos/788662/pexels-photo-788662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/326496/pexels-photo-326496.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/3224155/pexels-photo-3224155.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/3617496/pexels-photo-3617496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1493226/pexels-photo-1493226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1438798/pexels-photo-1438798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1431762/pexels-photo-1431762.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/3680316/pexels-photo-3680316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/323645/pexels-photo-323645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/137613/pexels-photo-137613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/2564496/pexels-photo-2564496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1426620/pexels-photo-1426620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/3620404/pexels-photo-3620404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/544113/pexels-photo-544113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1261578/pexels-photo-1261578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]
const imgOverlayQuote = document.querySelectorAll(
  '.image-container .overlay h2'
)
const imgOverlayCredit = document.querySelectorAll(
  '.image-container .overlay p'
)
const galleryButton = document.querySelector('.button')
const buttonText = document.querySelector('.button span')
const buttonUnderLayer = document.querySelector('.button .layer2')

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
var tileAnimationDelay

assignImagesXY.called = false

window.addEventListener('resize', function(e) {
  pageLoad()
  gridSquares[0].addEventListener('transitionend', function(e) {
    pageLoad()
  })
  // assignImagesXY()
})
window.addEventListener("deviceorientation", function(e) {
  gridSquares[0].addEventListener('transitionend', function(e) {
    pageLoad()
    console.log('device rotated')
  })
  // assignImagesXY()
})

function pageLoad() {
  var gridPlaceholder = gridSquares[0].getBoundingClientRect()
  var templateContainerDims = placeholderContainer.getBoundingClientRect()
  for (let i = 0; i < gridSquares.length; i++) {
    gridSquaresXOrigin[i] = gridSquares[i].offsetLeft
    gridSquaresYOrigin[i] = gridSquares[i].offsetTop
    console.log(gridSquaresXOrigin[i], gridSquaresYOrigin[i])
    gridSlotCoordinates[i] =
      gridSquaresXOrigin[i] + 'px' + ', ' + gridSquaresYOrigin[i] + 'px'
  }
  var rootGridPos = gridSlotCoordinates.splice(10, 1)
  root.style.setProperty(
    '--grid-slot-root-pos',
    'translate(' + rootGridPos + ')'
  )

  imgContainer.style.setProperty('width', templateContainerDims.width + 'px')
  imgContainer.style.setProperty('height', templateContainerDims.height + 'px')

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

  function fillImages() {
    for (let i = 0; i < imgSquares.length; i++) {
      img[i].setAttribute("src", imgArray[i])
      function checkImgLandscape(i) {
        if (img[i].width >= img[i].height) {
          img[i].style.setProperty("width", 'auto')
          img[i].style.setProperty("height", '102%')
        }
        else {
          img[i].style.setProperty("width", '102%')
          img[i].style.setProperty("height", 'auto')
        }
      }
      checkImgLandscape(i)
    }
  }
  fillImages()
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
  buttonUnderLayer.classList.add('clickedAgain')
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
  clickedAgain = true
}

buttonUnderLayer.addEventListener('animationend', function(e) {
  buttonUnderLayer.classList.remove('clickedAgain')
})

galleryButton.addEventListener('click', function(e) {
  galleryButton.classList.add('clicked')
  placeholderContainer.style.setProperty('opacity', '0')
  if (!assignImagesXY.called) {
    tileAnimationDelay = setTimeout(assignImagesXY, 0)
  } else {
    imgShuffle(gridSlotCoordinates)
  }
})

pageLoad()
