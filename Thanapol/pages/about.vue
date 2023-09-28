<template>
    <div class="center">
        <h1 class="bold">ABOUT ME</h1>
        <img class="pic" :src="picture" :width="size" :height="size">
        <p >ชื่อ : {{ firstname }}</p>
        <p>นามสกุล : {{ lastname }}</p>
        <form @submit="submitForm">
            <label for=""></label>
            <input type="text" @input="setNickName">
            <button type="submit">บันทึก</button>
        </form>
        <p>ชื่อเล่น : {{ nickname }} </p>
        <p>อายุ : {{ age }}</p>
        <p>ที่อยู่ : <span class="hl" v-html="address"></span></p>
        <p v-if="hobby.length ===0">ไม่มีงานอดิเรก</p>
        <div v-else>
        <p class="bold">งานอดิเรก :</p>
        
            <ul class="hl">
                <li>{{ hobby[0] }}</li>
                <li>{{ hobby[1] }}</li>
                <li>{{ hobby[2] }}</li>
            </ul>
        </div>    
            <p class="bold">ข้อมูลพื้นฐาน :</p>
        <ul class="hl">
            <li>เพศ : {{ general.gender }}</li>
            <li>น้ำหนัก : {{ general.weight }}</li>
            <li>ส่วนสูง : {{ general.height }}</li>
            <li>โรคประจำตัว : {{general.status }}</li>
        </ul>
        <br>
            <button @click="showData">คลิกเพื่อดูข้อมูล</button>
            <button @click="increment(10)">เพิ่มค่า</button>
            <button @click="decrement(3)">ลดค่า</button>
    </div>
    </template>

<style scoped>
.pic {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    width: 170px;
    height: 170px;
}
.center{
    text-align: center;
}
.bold{
    font-weight: 800;
}
ul{
    text-align: center;
    background-color: transparent;
}
li{
    text-align: center;
    background-color: transparent;
}
.hl{
    color: salmon;
}
</style>

<script>
export default {
    data(){
        return{
            firstname: "Thanapol",
            lastname: "Thanomrod",
            age: 18,
            address: "<i>Chonburi</i>",
            picture: "https://rms.tatc.ac.th/files/importpicstd/01/66309010026.jpg",
            size: 150,
            hobby : ["ฟังเพลง","เล่นเกม","ดูหนัง"],
            general : {gender:"ชาย",weight:63,height:175,status:false},
            phone : "0925156128",
            email : "66309010026@tatc.ac.th",
        }
    },
    methods:{
        getFullname(){
                    return `$(this.firstname) $(this.lastname)`
                },
                showData(){
                    alert(this.firstname)
                },
                increment(value){
                    this.age += value
                },
                decrement(value){
                    this.age -= value
                },
                setNickName(event){
                    this.nickname=event.target.value
                },
                submitForm(e){
                    e.preventDefault();
                    alert('บันทึกข้อมูลเรียบร้อย')
                }
    }
}
</script>
