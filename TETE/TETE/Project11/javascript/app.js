function toCelsius(fahrenheit){
    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + "°C"
}
function display(elementId, value){
    document.getElementById(elementId).innerHTML = "<i>"+value+"</i>"
}
function toFahrenheit(celsius){
    let value = (celsius * 9 / 5 + 32)
    return value.toFixed(2) + "°F"
}

alert(toCelsius(150))
display("toCelsius",toCelsius(150))
alert(toFahrenheit(32))
display("toFahrenheit",toFahrenheit(32))