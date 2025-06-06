let app = document.getElementById('app')
let content = app.innerHTML


fetch('layout.html')
    .then(response => response.text())
    .then(response => {
        document.documentElement.innerHTML = response
        document.querySelector('#app').innerHTML = content
    })
