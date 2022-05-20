function EUTEAMO(ele) {
    Swal.fire('Você é perfeita sabia? Em tudo! Cada detalhe do seu corpo me impressiona e cada onda do seu corpo me faz querer mais surfar em cada uma delas.')

    ele.classList.add('remove')
}

const titulo = document.querySelector('[data-anime]')

function textWriter(ele) {
    const textoArray = titulo.innerHTML.split('')
    titulo.innerHTML = ''
    textoArray.forEach((elemento, i) => {setTimeout(() => {titulo.innerHTML += elemento}, 75 * i)})
}

textWriter(titulo)
// console.log(contador)
// function startAnime() {
//     const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
//     const tituloTop = titulo.offsetTop
//     if(windowTop > tituloTop) textWriter(titulo)
// }

// window.addEventListener('scroll', () => {
//     startAnime()
// })