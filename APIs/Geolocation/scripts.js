// API de geolocalización

/* 
    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation
*/
// En esta direccion estan los tres metodos que utiliza la API. (probar el 2do: .watchPosition que es el que utilizan los moviles).
// Combinarlo con Google Maps


const button = document.getElementById('button')

button.addEventListener('click', () => {
    const geolocation = navigator.geolocation

    geolocation.getCurrentPosition(getPosition, error, options)
})

const options = {
    enableHightAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}

const getPosition = (position) => {
    console.log(object)

}

const error = (error) => console.log(error)