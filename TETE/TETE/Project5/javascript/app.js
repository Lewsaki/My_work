let round = prompt("จะเล่นกี่รอบ")
for(var i = 1; i <= round; i++){
    var answer = prompt("หัว หรือ ก้อย พิมพ์มาเลย")
    var random_answer=""
    if(Math.floor(Math.random()*10) <= 4){
    // หัว
    random_answer ="หัว"
    }
    else{
        // ก้อย
        random_answer="ก้อย"
    }
    if(answer == random_answer){
        alert ("ถูกต้องครับ!")
    }
    else{
        alert ("ผิด! ออก" +random_answer+ "ครับ")
    }
    document.getElementById("game").innerHTML+="รอบที่"+i +"&nbsp;"+"ทาย"+":"+ answer +"&nbsp;"+"ออก" + ":" + random_answer +"<br>"
    console.log(random_answer+" :" + answer)
    
}