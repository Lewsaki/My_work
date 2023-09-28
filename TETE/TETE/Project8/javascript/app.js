function toCelsius(){
    let fahrenheit = prompt("fahrenheit")
    let value = (fahrenheit - 32) * 5 / 9
    document.getElementById("tocelsius").innerHTML="แปลงจาก"+"&nbsp;"+fahrenheit+"°F"+"&nbsp;"+"เป็น"+"&nbsp;"+ value.toFixed(2) + "°C"
}
function toFahrenheit(){
    let celsius = prompt("Celsuius")
    let value = (celsius * 9 / 5 + 32)
    document.getElementById("tofahrenheit").innerHTML ="แปลงจาก"+"&nbsp;"+celsius+"°C"+"&nbsp;"+"เป็น"+"&nbsp;"+ value.toFixed(2) + "°F"
}
toCelsius()
toFahrenheit()