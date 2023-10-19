function numerosPrimos(numero)
{
    if(numero == 1) return false
    if(numero == 2) return true

    for (var i = 2; i < numero; i++)
    {
        if((numero % i) === 0)
        {
            return false
        }
    }
    return true
}

if(numerosPrimos(parseInt(prompt('Informe um número: '))))
{
    document.write('O número é primo')
} else
{
    document.write('O número não é primo')
}
