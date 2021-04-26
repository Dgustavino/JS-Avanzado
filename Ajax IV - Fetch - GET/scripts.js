/*
    Fetch API
    Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.
    Tambien provee un metodo global fetch() que proporciona una forma facil y logica de obtener recursos de forma 
    asincrona por la red.
    Está basado en promesas, por lo cual tiene un response un reject internos.

*/

const button = document.getElementById('button')

button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.ok ? Promise.resolve(res) : Promise.reject(res)) // '?' equivale a ==true (operador ternario)
            .then(res => res.json(res))                                 // ':' equivale a ==false (operador ternario)
            .then(res=> {
                const list = document.getElementById('list')
                const fragment = document.getElementById()
                for (const userInfo of res) {
                    const listItem = document.createElement('li')
                    listItem.textContent = `$(userInfo.id) - $(userInfo.name)`
                    fragment.appendChild(listItem)
                }
                list.appendChild(fragment)
            })
})