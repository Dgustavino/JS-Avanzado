/*
    Fetch API
    Para hacer peticiones POST, fetch admite un segundo parámetro.
    fetch(url), {
        method: 'POST',
        body: Los datos que enviamos. Si es un objeto hay que convertirlo con JSON.stringify(datos),
        headers: {
            cabeceras de infromación sobre lo que estamos enviando.
        }
    }
*/

const button = document.getElementById('button')

button.addEventListener('click', () => {
    const newPost = {
        title: 'A new Post',
        body: 'Lorem ipsum dolor',
        userId:1
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': "application/json"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    
})

