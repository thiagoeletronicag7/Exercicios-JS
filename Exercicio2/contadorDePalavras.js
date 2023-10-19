function contadorDePalavras()
{
    var texto = prompt('Informe o texto')
    //transforma a string em um array
    var separador = texto.split(' ')
    var contador = 0
    for (let i = 0; i < separador.length; i++) {
        contador++
    }
    document.write('O texto possui: ' + contador + ' palavras')
}

contadorDePalavras()