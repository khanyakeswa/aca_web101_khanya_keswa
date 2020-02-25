const sendButton = document.querySelector('.send-button');

let isSent = true

sendButton.addEventListener ('click', toggleButton)

function toggleButton(isSent) {
  if (isSent) {
    document.body.classList.add('toggled');
    isSent = false
    console.log('toggled')
  }
}
