// Remove default form behavior
const form = document.querySelector('form')

document.addEventListener('DOMContentLoaded', function() {
  form.addEventListener('submit', function(event) {
    event.preventDefault()
    alert('button pressed')
  })
})