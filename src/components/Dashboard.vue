<template>
  <div class="container text-left pt-5 pb-5 mb-5 userprofile">
    <div class="row">
      <div class="col-12">
        <h2>My Profile</h2>
        <hr><br>
        <h3><i class="fas fa-user"></i> {{user.name}} </h3> 
        <p><i class="fas fa-male"></i> <i class="fas fa-female"></i> {{user.gender}} </p> 
        <p><i class="fas fa-envelope"></i> {{user.email}} </p>
        <p><i class="fas fa-clock"></i> Registered at :{{user.created_at}} </p>

      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/';

export default {
  name: 'Subcribers',
  data() {
    return {
      user:[],
      loadSuccess:false,
    };
  },
  computed: {
    getToken(){
      return localStorage.getItem('token');
    }
  },
  mounted() {
    this.loadProfile();
  },
  methods: {
    loadProfile(){
      var token=this.getToken;
      if(token!=null || token!=''){
        return axios.get(API_URL + 'profile',{
          params: {
            token:token
          }
        }).then(
            response => {
              if(response.data.status==true){
                this.successful= true;
                this.user=response.data.user;
              }
          }).catch(error => {
              console.log(error);
              this.message = 'User Cannot found';
              this.successful= false;
        });

      }
      
    }
    
  }
  
};
</script>
<style scoped>
.userprofile{
  min-height:450px;
}
label{
  color:gray;
}
.btn{
  min-width: 100px;
}
.bg-green{
  background-color: rgb(6, 165, 170);
}
.bg-blue{
  background-color: rgb(9, 74, 216);
}
.btn-rounded{
  border-radius: 50%;
  color: #fff;
  border: none;
  padding: 12px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
}
.btn-rounded:hover{
  background-color: cadetblue;
}
.text-box{
  width: 80%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
</style>