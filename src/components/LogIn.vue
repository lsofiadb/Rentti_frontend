<template>
<div>
<div class="bg_image"></div>
  <div class="logIn_user">
      <div class="container_logIn_company">
        <h2>Iniciar sesión</h2>
        <form v-on:submit.prevent="processLogInUser">
          <input type="text" v-model="company.username" placeholder="Username" />
          <br/>
          <input type="password" v-model="company.password" placeholder="Password" />
          <br />
          <button type="submit">Iniciar Sesion</button>
        </form>
      </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data: function () {
    return {
      company: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    processLogInUser: function () {
      axios
        .post("https://rentti-development.herokuapp.com/login/", this.company, {
          headers: {},
        })
        .then((result) => {
          let dataLogIn = {
            username: this.company.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };
          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          if (error.response.status == "401")
            alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },
};
</script>
<style>
.bg_image {
  /*https://www.w3schools.com/howto/howto_css_blurred_background.asp*/
  background-image: url("./1.jpeg");
  filter: blur(6px);
  height: 100%;
  background-position: center;
  /*background-position: no-repeat;*/
  background-size: cover;
}

.logIn_user {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  padding: 20px;
  box-shadow: 0 10px 80px -5px rgb(0, 0, 0);
  text-align: center;
}

.logIn_user h2 {
  color: #babfc4;
}
.logIn_user form {
  width: auto;
}
.logIn_user input {
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;
  border: 1px solid #283747;
}
.logIn_user button {
  width: 100%;
  height: 40px;
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}
.logIn_user button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}
</style>
