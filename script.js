const div = document.querySelector('div')
function novaImagem() {
    let formulario = '<form onsubmit="adicionar(event)">'
    formulario += '<h2>Inserir nova imagem</h2>'
    formulario += '<input type="url" name="" id="" required placeholder="Endereço da imagem"></input>'
    formulario += '<button type="submit">Adicionar</button>'
    formulario += '<button type="reset" onclick="cancelar()">Recolher</button>'
    formulario += '</form>'
    div.innerHTML = formulario
}

function cancelar() {
    div.innerHTML = ''
}

//let imagens = 0
const section = document.querySelector('section')
function adicionar(event) {
    event.preventDefault()
    let iptUrl = document.querySelector('input[type=url]')
    let img = document.createElement('img')
    img.setAttribute('src', `${iptUrl.value}`)
    section.appendChild(img)
    /*let img = `<img src="${iptUrl.value}">`
    imagens += img
    section.innerHTML = imagens*/
    iptUrl.value = ''
    iptUrl.focus()
}

