function Soma(){
    let n1 = document.querySelector('#n1').value

    let n2 = document.querySelector('#n2').value

    let Resultado = parseInt(n1) + parseInt(n2)

    document.querySelector('#Resultado').innerHTML = Resultado

    let paragrafo = document.createElement("p")

    paragrafo.innerText = "Segunda tem jogo"

    document.body.appendChild(paragrafo)
}
function minhaFuncao(){
        document.getElementById('minhaDiv').classList.add('classe1','classe2','classe3')
}
function Remove(){
    document.getElementById('minhaDiv').classList.remove('classe1','classe2','classe3')
}

