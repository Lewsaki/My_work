<template>

  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand p-2 me-auto" href="/" style="font-size: 40px; color :salmon;">TNP&nbsp;<a style="font-size: 40px; color:khaki;">JS</a></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <a class="nav-link" href="/signin">Sign-In</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/signup">Sign-Up</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/listData">Student</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="btn btn-danger" @click="logout">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
<slot />
  </header>

  <footer>

  </footer>

</template>
<script>
import axios from '../lib/axios'

export default {
  async mounted()
{
    console.log('default layout mounted')
    clearInterval(this.timer)
    this.timer = setInterval(async () => {
      let token = sessionStorage.getItem('token')
      if (!token) {
        return
      }
      let result = await axios.get('/api/token')
      if (!result.data.token) {
        return this.logout()
      }
      sessionStorage.setItem('token', result.data.token)
      axios.defaults.headers.common.Authorization = `Bearer ${result.data.token}`
    }, 5 * 60 * 1000)
  },
  beforeUnmount() {
    console.log('beforeUnmount')
    clearInterval(this.timer)
  },
  methods:{
    logout(){
      sessionStorage.removeItem('token')
      delete axios.defaults.headers.common.Authorization
      this.$router.push('/signin')
    }
  }
}
</script>
