import axios from 'axios'
// Github api url: https://api.github.com/users

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form')

  form.addEventListener('submit', function(event) {
    event.preventDefault()
    const userName = document.querySelector('input').value
    const response = await axios.get(`https://api.github.com/users/${userName}`)
    console.log(response.data)
  })
})