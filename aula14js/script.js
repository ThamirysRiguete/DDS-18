var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var textoSaudacao = document.getElementById("saudacaoTexto")
var mesAno = document.getElementById("mesAno")

var diasSemana = ['DOMINDO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO']

var mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

var cumprimento = ''

var atualizaRelogio = setInterval(function (){
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutoAtual = dataAtual.getMinutes()
    var segundosAtual = dataAtual.getSeconds()
    var diaAtual = dataAtual.getDate()
    var mesAtual = dataAtual.getMonth()
    var anoAtual = dataAtual.getFullYear()


    if(horaAtual < 10)
        horaAtual = "0" + horaAtual

    if(minutoAtual < 10)
        minutoAtual = "0" + minutoAtual

    if(segundosAtual < 10)
        segundosAtual = "0" + segundosAtual

    cumprimento = trocaSaudacao(horaAtual)

    horas.textContent = horaAtual
    minutos.textContent = minutoAtual
    segundos.textContent = segundosAtual
    textoSaudacao.textContent = `${cumprimento} / ${diasSemana[diaAtual]} / ${diaAtual} de ${mesesAno[mesAtual]} ${anoAtual}`
})

function trocaSaudacao(hora){
    if(hora < 6 )
        return 'Boa Madrugada'
    else if(hora < 12)
        return 'Bom Dia'
    else if(hora < 18)
        return 'Boa Tarde'
    else
        return ' Boa Noite'
}