// for the link in scriptURL make your own link google sheet, for full tutorial video just copy this link     https://youtu.be/a8Om25FbaJA?si=HCrXtUIc7oQaalat

const scriptURL ='https://script.google.com/macros/s/AKfycbxc4SN5cNrriuYNxJgWLMD5qCrLnBszeuPEvAwnOqwEbKGoM_CjLYzslmlWF2NyE9PKKg/exec' 

const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You For Subscribing!"
        setTimeout( function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
