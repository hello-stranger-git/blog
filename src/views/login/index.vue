<template>
  <div class="container">
    <div class="container-left">
      <div class="context">
        <span>GOOD DAY</span>
        <p>Lucky Lady Is Always There</p>
      </div>
    </div>
    <div class="container-right">
      <div class="from">
        <div class="fromTitle">
            <span>Sigin in</span>
        </div>
        <div class="fromItem">
          <label for="username">USERNAME</label>
          <input type="text" id="username" placeholder="useranem" v-model="username" />
        </div>
        <div class="fromItem">
          <label for="password">PASSWORD</label>
          <input type="text" id="password" placeholder="password" v-model="password" />
        </div>
        <button @click="login">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
import { apiLogin } from "../../api/index";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async login() {
      let username = this.username;
      let password = this.password;
      let result = await apiLogin({ username, password });
      if (result.headers.authorization) {
        this.$store.dispatch("token", { token: result.headers.authorization });
        this.$router.push({ name: "Index" });
      }
    //   this.$router.push({ name: "Photo" });
    }
  }
};
</script>
<style>
body,
html,
h1,
p,
ul,
h5 {
  margin: 0px;
  padding: 0px;
}
ul{
  list-style: none;
}
</style>
<style scoped>
body,
html {
  background-color:#e1e6ea;
}
.container {
  width: 700px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  border-radius: 5px;
  background-color: aliceblue;
  overflow: hidden;
}
.context {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;

  font-weight: 800px;
  color: #fff;
  font-size: 24px;
}
.container-left,
.container-right {
  width: 50%;
  text-align: center;
  height: 400px;
}
.container-left {
  background: linear-gradient(to top, #d3959b, #bfe6ba);
}
.container-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
}
.fromItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 20px;
}
.fromItem > input {
  width: 50%;
  border-radius: 3px;
  border: 1px solid gray;
  height: 25px;
  background-color: aliceblue;
  outline: none;
  padding-left: 10px;
}
.fromItem > input:focus {
  border: 1px solid #409eff;
}
.fromItem > label {
  position: relative;
  top: 10px;
  background-color: aliceblue;
}
.from > button {
  width: 80px;
  height: 30px;
  margin: 10px;
  background-color: #409eff;
  border: 0px;
  border-radius: 3px;
  outline: none;
  color: #fff;
  cursor: pointer;
}
.fromTitle{
    display: none;  
}

@media screen and (max-width: 768px){
    .fromTitle{
      display: block;  
    }
    .container{
        width: 280px;
    }
    .container-left{
        display: none;
    }
    .container-right{
          background: linear-gradient(to top, #d3959b, #bfe6ba);
          width: 100%;
    }
    .from{
        display: flex;
        flex-direction: column;
        align-items: center;    
        height: 200px;
        justify-content: space-evenly;
    }
    .fromItem > label{
        display: none;
    }
    .fromItem > input{
        width: 100%;
    }
    .fromTitle{
        color: #fff;
        font-size: 20px;
        font-weight: 800;
    }
    .from > button{
        margin: 0px 
    }
}
</style>