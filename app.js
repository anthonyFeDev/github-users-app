document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form')

  form.addEventListener('submit', function(event) {
    event.preventDefault()
    const userName = document.querySelector('input').value
    alert(userName)
  })
})