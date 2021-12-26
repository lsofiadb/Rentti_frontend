<template>
  <div>
  
  <div class="bg_image"></div>

  <div class="signUp_company">
    <div class="container_signUp_company">
      <h2>Registrarse</h2>
      <form v-on:submit.prevent="processSignUp">
        <input type="number" v-model="company.nit_rut" placeholder="NIT/RUT" />
        <br/> 
        <input type="text" v-model="company.username" placeholder="Username" />
        <br/>
        <input type="password" v-model="company.password" placeholder="Password"  />
        <br/>
        <input type="text" v-model="company.name" placeholder="Company Name" />
        <br/>
        <input type="text" v-model="company.office_address" placeholder="Office Address" />
        <br/>
        <input type="number" v-model="company.telephone_number" placeholder="Office Telephone" />
        <br/>
        <input type="text" v-model="company.corporate_email" placeholder="Company Email" />
        <br/>
        <input type="text" v-model="company.web_site" placeholder="Web Site" />
        <br/>
        <input type="text" v-model="company.chamber_of_comerce" placeholder="Commerce  #" />
        <br />
        <input type="text" v-model="company.leaseholder.insurance_number" placeholder="Insurance  #" />
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data: function () {
    return {
      company: {
        nit_rut: "",
        username: "",
        password: "",
        name: "",
        office_address: "",
        telephone_number: "",
        corporate_email: "",
        web_site: "",
        leaseholder: {
          insurance_number: "",
          company_id: ""
        },
      },
    };
  },
  methods: {
    processSignUp: function () {

      // TODO: Improve this json parameter.
      this.company.leaseholder.company_id = 120 / 2;

      axios
        .post("https://rentti-development.herokuapp.com/user/", this.company, {
          headers: {},
        })
        .then((result) => {
          let dataSignUp = {
            username: this.company.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };
          this.$emit("completedSignUp", dataSignUp);
        })
        .catch((error) => {
          console.log(error);
          alert("ERROR: Fallo en el registro.");
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
  background-position: no-repeat;
  background-size: cover;
}
.signUp_company {
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
  z-index: 2;
  width: auto;
  padding: 20px;
  box-shadow: 0 10px 80px -5px rgb(0, 0, 0);
  text-align: center;
}
.signUp_company h2 {
  color: #a4adb8;     
}
.signUp_company form {
  width: auto;
}
.signUp_company input {
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;
  border: 1px solid #283747;
}
.signUp_company button {
  width: 100%;
  height: 40px;
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0 25px 0;
}
.signUp_company button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}
</style>
