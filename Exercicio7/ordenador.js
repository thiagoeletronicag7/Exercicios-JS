var tamanho = -1
var array = []
while (tamanho < 1 || tamanho > 20)
{
    tamanho = parseInt(prompt('Informe o tamanho do array (No mínimo 1, máximo 20'))
}

for(var i = 0; i < tamanho; i++)
{
    var numero = parseInt(prompt('Informe os números para preencher o array'))
    array.push(numero)
}

function ordenaCrescente(vetor)
{
    var percorre
    var aux
    do
    {
        percorre = false
        for (i = 0; i < vetor.length-1; i++)
        {
            if (vetor[i] > vetor[i+1])
            {
                aux = vetor[i]
                vetor[i] = vetor[i+1]
                vetor[i+1] = aux
                percorre = true
            }
        }
    } while (percorre)
    return vetor
}

function ordenaDecrescente(vetor)
{
    var percorre
    var aux
    do
    {
        percorre = false
        for (i = 0; i < vetor.length-1; i++)
        {
            if (vetor[i] < vetor[i+1])
            {
                aux = vetor[i]
                vetor[i] = vetor[i+1]
                vetor[i+1] = aux
                percorre = true
            }
        }
    } while (percorre)

    return vetor
}

function selecionaOrdenacao()
{
    var tipoOrdenacao
    var seletorPressionado = document.getElementsByName('ordenacao')
    for (var i = 0; i < seletorPressionado.length; i++)
    {
        if(seletorPressionado[i].checked)
        {
            tipoOrdenacao = seletorPressionado[i].value
        }
    }

    if(tipoOrdenacao == "crescente")
    {
        array = ordenaCrescente(array)
    } 
    else if(tipoOrdenacao == "decrescente")
    {
        array = ordenaDecrescente(array)
    }

    var resultadoOrdenado = document.createElement('p')
    resultadoOrdenado.textContent = array.join(', ')
    document.body.appendChild(resultadoOrdenado)
}