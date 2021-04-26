
// Visibility Change sirve para que no se siga reproduciendo un video o canción cuando cambiamos de pestaña en el navegador, eso por molestia al usuario y para ahorrar recursos tambien.

/* Vídeo: https://www.pexels.com/es-es/video/2869107/ */
const video = document.getElementById('video')

// addEventListener('visibilitychange', (e) => {
//     if (document.visibilityState === 'visible') {
//         console.log('PLAY')
//         video.play()
//     } else if (document.visibilityState === 'hidden') {
//         console.log('PAUSE')
//         video.pause()
//     }
// })

// Con Operador Ternario: 
addEventListener('visibilitychange', () => document.visibilityState === 'visible' ? video.play() : video.pause())