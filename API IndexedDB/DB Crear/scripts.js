/*
    Base de Datos indexada(NoSQL)
        Es una manera de almacenar datos de manera persistente en el navegador.
        Almacena pares llave-valor. Los valores pueden ser objetos con estructuras complejas y las llaves pueden 
        ser propiedades de esos objetos.

        La API de indexedDB es mayormente asíncrona.
        IndexedDB usa eventos DOM para notificar cuando los resultados están disponibles.
        IndexedDB es orientada a objetos.
*/

const indexedDB = window.indexedDB  //Si el nombre de la variable la llamamos igual al objeto tenemos que usar window

if (indexedDB) {
    let db
    const request = indexedDB.open('tasksList', 1) //Abre la BD

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
    }

    request.onupgradeneeded = () => { //primero usa esta función para crear la base de datos
        db = request.result
        console.log('Create', db)

        const objectStore = db.createObjectStore('tasks') //Creación del almacen de datos (Una coleccion si fuera MongoDB)
    }

    request.onerror = (error) => {
        console.log('Error', error)
    }
}