// API intersection observer, sirve para que no cargue todo el contenido disponible hasta que hagamos scroll y vaya mostrando contenido poco a poco(asi no carga todo el contenido a la página, solo lo que ocupemos o quepa en el viewport en el momento)

// EJ: FaceBook, Instagram

const boxes = document.querySelectorAll('.box')

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target.id, 'is intersecting')
        }
    })
}

const options = {
    // root:
    // rootMargin: '-200px'
    threshold: 0.25
}

const observer = new IntersectionObserver(callback, options)
boxes.forEach(element => observer.observe(element))