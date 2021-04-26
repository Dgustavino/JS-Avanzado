

const button = document.getElementById('button')

button.addEventListener('click', () => {

    axios({
        method:'POST',
        url:'https://jsonplaceholder.typicode.com/posts',
        data:{                                             //Ya no se ocupa el JSON.stringfy, porque axios lo hace automatico.
            title: 'A new Post',
            body: 'Lorem ipsum Dolor',
            userId: 1
        }
    })
    .then(res => console.log(res.data)) //Tampoco tenemos que convertir la respuesta a json, porque ya lo hace internamente.
    .catch(err=> console.log(err))
})