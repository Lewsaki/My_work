<template>
  <div class="container w-25" style="margin-top:150px;">
    <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
      <h1 style="text-align: center;">Sign-in</h1>
      <div class="card-body">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" v-model="username">
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" v-model="password">
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" v-model="remember">
          <label class="form-check-label" for="exampleCheck1">Check me out {{ remember }}</label>
        </div>

        <button type="submit" class="btn btn-primary" :disabled="isLocked">Submit</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username : '',
      password : '',
      remember : ''
    }
  },
  computed: {
    isLocked() { 
      return this.username.length === 0 || this.password.length === 0
    }
  }
}
</script>