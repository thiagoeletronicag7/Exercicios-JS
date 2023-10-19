function validadorDeEmail()
{
    const email = document.getElementById('emailInput').value
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (formatoEmail.test(email))
    {
        alert('O formato do e-mail é válido')
        return true
    } 
    else 
    {
        alert('O formato do e-mail é inválido!')
        return false
    }
}

