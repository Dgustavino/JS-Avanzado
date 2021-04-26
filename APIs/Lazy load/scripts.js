// Lazy Load: Carga peresoza.
// Continuacion de la API intersection Observer.
// Este es un ejemplo de Instagram con fotos
// Tambien se puede utilizar en las páginas que cuando vayamos haciendo scroll, empiezen a aparecer objetos en animacion de varios angulos(Izq-Der), etc..
// Cuando la seccion(padre) entre en el viewport, le añadimos la funcion a los hijos para que aparezcan las animaciones en lazy load 

const images = document.getElementById('images')
const getImages = () => {
    axios('https://picsum.photos/v2/list?page=3&limit=5')
        .then(res => {
            const fragment = document.createDocumentFragment()
            res.data.forEach(element => {
                const newImage = document.createElement('IMG')
                newImage.src = element.download_url
                fragment.appendChild(newImage)
            })
            images.appendChild(fragment)
            setObserver()
        })
}

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            getImages()
        } else {
            //quitar animación
        }
    })
}

const setObserver = () => { // Cuando estemos a la mitad de la ultima imagen, cargara 5 más.
    const options = {
        threshold: 0.5 
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(images.lastElementChild)
}

getImages()