<template>
  <div class="container mt-5">
    <p class="">ชื่อ-นามสกุล : {{ name }}</p>
    <p>อีเมล : {{ email }}</p>
    <p :class="{'text-danger':isLocked}" style="color: red;">รหัสผ่าน : {{ password }}</p>
    <p>เปลี่ยนรหัสผ่าน : <input type="text" v-model="password"></p>
    <button class="btn btn-success rounded-3" type="button" 
    :disabled="isLocked">
      บันทึก
    </button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        name : 'Thanapol',
        email : '66309010026@tatc.ac.th',
        password : '123456789Z'
      }
    },
    computed:{
      isLocked() {
        return this.password.length < 10
      }
    }
  }

</script>