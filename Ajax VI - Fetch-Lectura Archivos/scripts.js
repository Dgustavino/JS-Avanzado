/*
    Fetch API
    blob(): Binary Long OBject = Para leer archivos(img,pdf,etc...)
*/

const buttonImg = document.getElementById('button-img')
const buttonPdf = document.getElementById('button-pdf')

buttonImg.addEventListener( 'click', () => {
    fetch('dog.jpg')
        .then(res => res.blob())
        .then(img => {
            document.getElementById('img').src = URL.createObjectURL(img)
        })
})

buttonPdf.addEventListener( 'click', () => {
    fetch('demo.pdf')
        .then(res => res.blob())
        .then(pdf => {
            document.getElementById('pdf').src = URL.createObjectURL(pdf)
        })
})
