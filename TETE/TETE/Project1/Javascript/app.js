 let number = prompt("กรอกเลขหวยที่อยากได้ : ")
 let randomnumber = Math.floor(Math.random() * 1000)
 console.log(number)
 console.log
 document.getElementById("buy").innerHTML = number
 document.getElementById("buy2").innerHTML = number 
 document.getElementById("result").innerHTML = randomnumber
if (number == randomnumber){
    document.getElementById("buy").innerHTML = "ยินดีด้วยคุณถูกเลขท้าย 3 ตัว"
}
else{
    document.getElementById("buy").innerHTML = "เสียใจด้วย"
}

let age = prompt("อายุเท่าไหร่ครับ")
if(age == 12){
    console.log("ไปเรียน ป ห้า นะ")
}
else if(age == 13){
    console.log("ไปเรียน ป หก นะ")
}