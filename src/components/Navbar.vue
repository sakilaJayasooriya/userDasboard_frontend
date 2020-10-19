<template>
  <div class="hello">
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">User Dashboard</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link"><i class="fas fa-home"></i> Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link"><i class="fas fa-sign-in-alt"></i> Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/register" class="nav-link"><i class="fas fa-user-plus"></i> Register</router-link>
                </li>
            </ul>
            <a class="btn btn-secondary my-2 my-sm-0" href @click.prevent="logOut">
                <i class="fas fa-power-off"></i>
            </a>
        </div>
    </nav>
   </div>
</template>

<script>
import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/';

export default {
  name: 'Navbar',
  data() {
    return {
      user:''
    };
  },
  methods: {
    logOut(){
      var currentToken=localStorage.getItem('token');
      axios.get(API_URL + 'logout',{
        params: {
          token:currentToken
        }
      }).then(
            response => {
              if(response.data.status==true){
                localStorage.removeItem('token');
                this.$router.push('/login');
              }
          }).catch(error => {
              console.log(error);
              this.message = 'Logout Failed';
              this.successful= false;
              this.$router.push('/login');
      });
    }
    
  }
}
</script>
<style>
    .nav-item{
        padding: 15px 50px;
    }
    .nav-item:hover{
        background-color: darkgreen;
    }
</style>
