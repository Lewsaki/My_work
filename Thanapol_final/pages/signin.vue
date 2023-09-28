<template>
  <div class="container w-25" style="margin-top:150px;">
    <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
      <h1 style="text-align: center;">Sign-in</h1>
      <div class="card-body">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" v-model="username" autofocus :disabled="busy">
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" v-model="password">
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" v-model="remember">
          <label class="form-check-label" for="exampleCheck1">Remember Me</label>
        </div>
        <button type="submit" class="btn btn-primary me-2" :disabled="isLocked" @click="doLogin">Submit</button>
        <button type="submit" class="btn btn-danger" @click="doReset">Reset</button>
        <p class="text-danger text-center">{{ message }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  setup() {
    setPageLayout('public')
  },
  data() {
    return {
      username : '',
      password : '',
      remember : '',
      message : '',
      busy : false,
    }
  },
  computed: {
    isLocked() { 
      return this.username.length === 0 || this.password.length === 0
    }
  },
  methods: {
    async doLogin() {
      this.busy = true
      this.message = ''
      try{
      let payload = {
        user:this.username,
        pass:this.password
      }
      let result = await axios.post('/api/login',payload)
      console.log('result=',result)
      if(!result.data.token){
        throw new Error('user or pass incorrect')
      }
      window.sessionStorage.setItem('token',result.data.token)
      axios.defaults.headers.common.Authorization = `Bearer ${result.data.token}`
      navigateTo('/listData')
      // if (this.username === "admin" && this.password === "1234") {
      //   this.$router.push(`/listData/`)
      // } else {
      //   this.message = 'Invalid credentials. Please try again.'
      // }
    }catch(e){
      this.message = e.message
    }finally{
      this.busy = false
    }
    },
    doReset(){
      this.username = '',
      this.password = '',
      this.message = '' 
    }
    },
  }
</script>