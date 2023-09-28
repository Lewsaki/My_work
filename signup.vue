<template>
  <div class="container w-25" style="margin-top:150px;">
    <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
      <h1 style="text-align: center;">Sign-up</h1>
      <div class="card-body">
        <div class="mb-3">
          <label for="firstname" class="form-label">Firstname</label>
          <input type="text" class="form-control" v-model="firstname">
        </div>

        <div class="mb-3">
          <label for="lastname" class="form-label">Lastname</label>
          <input type="text" class="form-control" v-model="lastname">
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Email</label>
          <input type="email" class="form-control" v-model="email">
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" v-model="password">
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Telephone Number</label>
          <input type="number" class="form-control" v-model="telephone">
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Address</label>
          <input type="text" class="form-control" v-model="address">
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" v-model="remember">
          <label class="form-check-label" for="exampleCheck1">Check me out {{ remember }}</label>
        </div>

          <button type="submit" class="btn btn-success">Submit</button>

      </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      firstname : '',
      lastname : '',
      email : '',
      password : '',
      telephone : '',
      address : '',
      remember : '',
      invisible : false
    }
  },
  computed: {
    isShow() {
      return this.firstname.length === 0 || this.lastname.length === 0 || this.email.length === 0 ||
      this.password.length === 0 || this.telephone.length === 0 || this.address.length === 0
    }
  }
}
</script>