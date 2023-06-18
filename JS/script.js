var categorias = document.querySelector("#categorias")



var valorEntrada = document.querySelector('#valorEntrada')
var valorSaida = document.querySelector("#valorSaida")

var botao = document.getElementById('botao')

function chamaValor(){
    console.log(categorias.value)
valorSaida.value=valorEntrada.value
}
categorias.addEventListener('change', function(){console.log(categorias.value)})
botao.addEventListener('click', chamaValor)