// Libreria Axios basada en promesas para Peticiones GET, mucho mas liviana que Jquery
//Peso 13K
//Tiene transformación automatica para cuando hacemos peticiones JSON
//Se utiliza exclusivamente para peticiones GET en una API REST por tiempo y rendimiento.

//Instalación: npm install axios

const button = document.getElementById('button')

button.addEventListener('click', () => {

      axios({
          method: 'GET',
          url:'https://jsonplaceholder.typicode.com/users'

      }).then(res => {                                          //Nos ahorramos el promise y el reject
            const list = document.getElementById('list')
            const fragment = document.getElementById()
            for (const userInfo of res.data) {
                const listItem = document.createElement('li')
                listItem.textContent = `$(userInfo.id) - $(userInfo.name)`
                fragment.appendChild(listItem)
            }
            list.appendChild(fragment)
      }).catch(err=> console.log(err)) //Con este catch es como el reject
})