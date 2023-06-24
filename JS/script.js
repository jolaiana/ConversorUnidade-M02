// criação de variaveis para chamar elementos HTML ao JS
var categorias = document.querySelector("#categorias")

var valorEntrada = document.querySelector('#valorEntrada')

var valorSaida = document.querySelector("#valorSaida")

var botao = document.getElementById('botao')

//criação das variáves com o selection (entrada e saida) de unidades de cada categoria
var entradaComprimento = document.getElementById('entradaComprimento')
var entradaPeso = document.getElementById('entradaPeso')
var entradaTemperatura = document.getElementById('entradaTemperatura')
var saidaTemperatura = document.getElementById('saidaTemperatura')
var saidaPeso = document.getElementById('saidaPeso')
var saidaComprimento = document.getElementById('saidaComprimento')

// Faz que o valor digitado no input de entrada seja transferido para a div de saída
function chamaValor(resultado){
    valorSaida.innerHTML = `<p>${resultado}</p>`
}

// a variavel 'categorias' está sendo observada pelo addEventListener, quando houver uma mudança (monitorada pelo 'change') a função unidade da categoria será executada, mudando as seleções disponiveis de unidade
categorias.addEventListener('change', unidadeDaCategoria)

// a variável botão é monitorada e quando o evento 'click' ocorre, quando o usuário clica no botão, a condicional é verificada e realiza a execução da função de acordo com a categoria selecionada
botao.addEventListener('click', function(){
    if (categorias.value=='Temperatura'){
        converteTemperatura()
    } else if (categorias.value=='Peso'){
        convertePeso()
    } else if (categorias.value=='Comprimento'){
        converteComprimento()
    }
})

//Nessa função, atrelada ao categorias.addEventListener faz com que as opçoes de seleção de unidade sejam alteradas de acordo com a seleção da categora
function unidadeDaCategoria(){
    if (categorias.value == 'Temperatura'){
        entradaTemperatura.style.display='flex'
        saidaTemperatura.style.display='flex'
        entradaComprimento.style.display='none'
        saidaComprimento.style.display='none'
        entradaPeso.style.display='none'
        saidaPeso.style.display='none'
    }else if (categorias.value == 'Comprimento'){
        entradaComprimento.style.display='flex'
        saidaComprimento.style.display='flex'
        entradaPeso.style.display='none'
        saidaPeso.style.display='none'
        entradaTemperatura.style.display='none'
        saidaTemperatura.style.display='none'
    }else if (categorias.value == 'Peso'){
        entradaPeso.style.display='flex'
        saidaPeso.style.display='flex'
        entradaTemperatura.style.display='none'
        saidaTemperatura.style.display='none'
        entradaComprimento.style.display='none'
        saidaComprimento.style.display='none'
    }
}


//fórmulas de conversão de temperatura
function celsiusFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}
function celsiusKelvin(celsius){
    return celsius + 273.15;
}
function fahrenheitCelsius(fahrenheit){
    return (fahrenheit - 32) * 9 / 5;
}
function fahrenheitKelvin(fahrenheit){
    return fahrenheitCelsius(fahrenheit) + 273.15;
}
function kelvinCelsius(kelvin){
    return kelvin - 273.15;
}
function kelvinFahrenheit(kelvin){
    return celsiusFahrenheit(kelvinCelsius(kelvin));
    
}

//condicinal de conversão de temperatura
function converteTemperatura(){
    //o + converte o valorEntrada de string para número
    var valor = +valorEntrada.value
    if(entradaTemperatura.value == 'Celsius' && saidaTemperatura.value == 'Fahrenheit'){
        chamaValor(celsiusFahrenheit(valor))
        console.log (valor)
    }else if (entradaTemperatura.value == 'Celsius' && saidaTemperatura.value == 'Kelvin'){
        chamaValor(celsiusKelvin(valor))
    }else if (entradaTemperatura.value == 'Fahrenheit' && saidaTemperatura.value == 'Celsius'){
        chamaValor(fahrenheitCelsius(valor))
    }else if (entradaTemperatura.value == 'Fahrenheit' && saidaTemperatura.value == 'Kelvin'){
        chamaValor(fahrenheitKelvin(valor))
    }else if (entradaTemperatura.value == 'Kelvin' && saidaTemperatura.value == 'Celsius'){
        chamaValor(kelvinCelsius(valor))
    }else if (entradaTemperatura.value == 'Kelvin' && saidaTemperatura.value == 'Fahrenheit'){
        chamaValor(kelvinFahrenheit(valor))
    }
}

//Formulas de conversão de Peso
function quilogramaGrama(quilograma) {
    return quilograma * 1000;
}
function quilogramaLibra(quilograma) {
    return quilograma * 2.205;
}
function gramaLibra(grama) {
    return grama / 453.6;
}
function gramaQuilograma(grama) {
    return grama / 1000;
}
function libraQuilograma (libra) {
    return libra / 2.205;
}
function libraGrama(libra) {
    return libra  * 453.6;
}

//condicional de conversão de peso
function convertePeso(){
    var valor = +valorEntrada.value
    if(entradaPeso.value == 'Quilogramas' && saidaPeso.value == 'Gramas'){
        chamaValor(quilogramaGrama(valor))
    }else if (entradaPeso.value == 'Quilogramas' && saidaPeso.value == 'Libras'){
        chamaValor(quilogramaLibra(valor))
    }else if (entradaPeso.value == 'Gramas' && saidaPeso.value == 'Quilogramas'){
        chamaValor(gramaQuilograma(valor))
    }else if (entradaPeso.value == 'Gramas' && saidaPeso.value == 'Libras'){
        chamaValor(gramaLibra(valor))
    }else if (entradaPeso.value == 'Libras' && saidaPeso.value == 'Gramas'){
        chamaValor(libraGrama(valor))
    }else if (entradaPeso.value == 'Libras' && saidaPeso.value == 'Quilogramas'){
        chamaValor(libraQuilograma(valor))
    }
}

//Formulas de conversão de comprimento
function metroPolegada(metro) {
    return metro * 39.37;
}
function metroCentimetro (metro){
    return metro * 100;
}
function centimetroMetro (centimetro) {
    return centimetro / 100;
}
function centimetroPolegada(centimetro) {
        return centimetro / 2.54;
}
function polegadaCentimetro(polegada) {
    return polegada * 2.54;
}
function polegadaMetro(polegada){
    return polegada / 39.37;
}

//condicionais de conversão de comprimento
function converteComprimento(){
    var valor = +valorEntrada.value
    if(entradaComprimento.value=='Metro' && saidaComprimento.value=='Polegada'){
        chamaValor(metroPolegada(valor))
    }else if (entradaComprimento.value== 'Metro' && saidaComprimento.value=='Centímetro'){
        chamaValor(metroCentimetro(valor))
    }else if(entradaComprimento.value=='Centímetro' && saidaComprimento.value=='Metro'){
        chamaValor(centimetroMetro(valor))
    }else if (entradaComprimento.value=='Centímetro' && saidaComprimento.value=='Polegada'){
        chamaValor(centimetroPolegada(valor))
    } else if (entradaComprimento.value=='Polegada' && saidaComprimento.value=='Centímetro'){
        chamaValor(polegadaCentimetro(valor))
    } else if (entradaComprimento.value=='Polegada' && saidaComprimento.value=='Metro'){
        chamaValor(polegadaMetro(valor))
    }
}