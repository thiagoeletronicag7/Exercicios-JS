function conversorTemperatura(temperaturaCelsius)
{
    var fahrenheit = (temperaturaCelsius * (9/5)) + 32
    return fahrenheit
}

var temperatura = parseFloat(prompt('Informe a temperatura em Celsius'))

document.write('A temperatura respectiva em Fahrenheit é: ' + conversorTemperatura(temperatura))