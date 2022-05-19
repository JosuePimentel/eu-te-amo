function EUTEAMO() {
    Swal.fire('EU 4TEAMOOOOO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
}

const titulo = document.querySelector('.animation01')

const infoTitulo = titulo.getBoundingClientRect()
console.log(infoTitulo)
console.log('-----------')


function textWriter(ele) {
    const textoArray = ele.innerHTML.split('')
    ele.innerHTML = ''
    textoArray.forEach((elemento, i) => {setTimeout(() => {ele.innerHTML += elemento}, 75 * i)})
}
textWriter(titulo)