const botao = document.getElementById('gerar_senha')

function geradorDeSenhasAleatorio(tamanho, temCaracterEspecial, temNumero, temMaiusculas, temMinusculas)
{
    var caracteres = ''
    var senha = ''
    var estaoVazios = true

    while (estaoVazios)
    {
        if (temCaracterEspecial || temNumero || temMaiusculas || temMinusculas)
        {
            estaoVazios = false
        }
    }
    
        if (temCaracterEspecial)
        {
            caracteres += '!@#$%^&*()_+-={}[];:,.<>?'
        }

        if (temNumero)
        {
            caracteres += '0123456789'
        }

        if (temMaiusculas)
        {
            caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }

        if (temMinusculas)
        {
            caracteres += 'abcdefghijklmnopqrstuvwxyz'
        }

        for(var i = 0; i < tamanho; i++)
        {
            const aleatorio = Math.floor(Math.random() * caracteres.length)
            senha += caracteres[aleatorio]
        }

    return senha
}


function condicoesSenha()
{
    const tamanhoInput = document.getElementById('tamanho-da-senha').value 
    const tamanho = parseInt(tamanhoInput) 

    const temCaracterEspecial = document.getElementById('caracter_especial').checked
    const temNumero = document.getElementById('caracter_numerico').checked
    const temMaiusculas = document.getElementById('caracter_maiusculo').checked
    const temMinusculas = document.getElementById('caracter_minusculo').checked

    if(!temCaracterEspecial && !temNumero && !temMaiusculas && !temMinusculas)
    {
        document.getElementById('senha_gerada').innerText = 'Por favor, selecione pelo menos uma caixa'
    } 
    else if (tamanho > 0)
    {
        const senha = geradorDeSenhasAleatorio(tamanho, temCaracterEspecial, temNumero, temMaiusculas, temMinusculas)
        document.getElementById('senha_gerada').innerText = senha
    }
    else 
    {
        document.getElementById('senha_gerada').innerText = 'Por favor, informe um tamanho válido'
    }
}