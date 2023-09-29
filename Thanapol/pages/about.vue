<template>
    <div class="center">
        <h1 class="bold">ABOUT ME</h1>
        <img class="pic" :src="picture" :width="size" :height="size">
        <p >ชื่อ : {{ firstname }}</p>
        <p>นามสกุล : {{ lastname }}</p>
        <p>ชื่อเล่น : {{ nickname }} </p>
        <form @submit.prevent="submitForm">กรอกชื่อเล่น <input type="text" ref="nicknameE1"> <input type="submit" value="บันทึก"></form>
        <button @click="toggleVisible">{{ isVisible? "ซ่อน" : "แสดง" }}รายละเอียด</button>
        <hr />
        <h2>Method1 : {{ getRandomByMethod() }}</h2>
        <h2>Method2 : {{ getRandomByMethod() }}</h2>
        <hr />
        <h2>computed1 : {{ getRandomByComputed }}</h2>
        <h2>computed2 : {{ getRandomByComputed}}</h2>
        <hr>
        <h2>เงินเดือน : {{  salary }} บาท</h2>
        <button @click="addSalary(5000)">AddSalary</button>
        <h2>Annual income : {{ getIncome }}</h2>
        <h2>position : {{ getDepartment }}</h2>
        <hr/>
        <div v-show="isVisible">
        <p>อายุ : {{ age }}</p>
        <p>ที่อยู่ : <span class="hl" v-html="address"></span></p>
        <p v-if="hobby.length ===0">ไม่มีงานอดิเรก</p>
        <div v-else>
        <p class="bold">งานอดิเรก :</p>
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
            nickname: "",
            age: 18,
            address: "<i>Chonburi</i>",
            picture: "https://rms.tatc.ac.th/files/importpicstd/01/66309010026.jpg",
            size: 150,
            hobby : ["ฟังเพลง","เล่นเกม","ดูหนัง"],
            general : {gender:"ชาย",weight:63,height:175,status:false},
            phone : "0925156128",
            email : "66309010026@tatc.ac.th",
            isVisible: false,
            salary:20000,
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
                submitForm(){
                    this.nickname = this.$refs.nicknameE1.value
                },
                toggleVisible(){
                    this.isVisible = !this.isVisible
                },
                addSalary(value){
                    this.salary +=value
                },
                getRandomByMethod(){
                    return Math.random();
                }
    },
    computed:{
        getIncome(){
            return this.salary*12;
        },
        getDepartment(){
            return this.salary>= 35000? "Project manager" : "Programer"
        },
        getRandomByComputed(){
            return Math.random();
        }
    },
    watch:{
        salary(value){
            if(value > 50000){
                alert("Salary should not exceed 50,000 bath");
                setTimeout(() =>{
                    this.salary=50000
                },100)
            }
        }
    }
}
</script>
