const navbar = document.querySelector('.navbar', '.portfolio-button')

let last_known_scroll_position = 0
let ticking = false
let isCollapsed = false
let isTransitioned = false

let enterSectionOne = false
let enterSectionTwo = false
let enterSectionThree = false
let enterSectionFour = false
let enterSectionFive = false
let enterSectionSix = false
let enterSectionSeven = false

let exitSectionOne = false
let exitSectionTwo = false
let exitSectionThree = false
let exitSectionFour = false
let exitSectionFive = false
let exitSectionSix = false
let exitSectionSeven = false

function doSomething(scroll_pos) {
  // navbar.style.transform = `translateX(${scroll_pos}px)`
  // Do something with the scroll position
  const isScrolledPastTopSection = scroll_pos >= 0.5 * window.innerHeight
  if (!isCollapsed && isScrolledPastTopSection) {
    document.body.classList.add('collapsed')
    isCollapsed = true
    console.log('collapsing')
  }
  if (isCollapsed && !isScrolledPastTopSection) {
    document.body.classList.remove('collapsed')
    isCollapsed = false
    console.log('uncollapsing')
  }

  // scroll indicator sections
  const colorBarHeight = document.getElementsByClassName('color-bar');

  const isScrolledPastSectionOne = scroll_pos >= 0.5 * window.innerHeight
  const isScrolledPastSectionTwo = scroll_pos >= 1.5 * window.innerHeight
  //Scroll-dot 1
  if (!enterSectionTwo && isScrolledPastSectionOne) {
    document.body.classList.add('enter-section-2')
    enterSectionTwo = true
  }
  if (enterSectionTwo && !isScrolledPastSectionOne) {
    document.body.classList.remove('enter-section-2')
    enterSectionTwo = false
  }
  if (!exitSectionTwo && isScrolledPastSectionTwo) {
    document.body.classList.add('exit-section-2')
    exitSectionTwo = true
  }
  if (exitSectionTwo && !isScrolledPastSectionTwo) {
    document.body.classList.remove('exit-section-2')
    exitSectionTwo = false
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position)
      ticking = false
    })

    ticking = true
  }
})

doSomething(window.scrollY)
