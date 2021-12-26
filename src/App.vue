<template>
  <div id="app" class="app">
    <head>
      <meta charset="UTF-8" />
        <title>Rentti</title>
      <meta name="viewport" content="width=device-width,user-scalable=no,
      initial-scale=1,maximum-scale=1,minimum-scale=1"/>  
    </head>
    <header> 
      <div class = "contenedor"> 
        <img class="header-logo" src="./logo.png">
        <input type="checkbox" id="menu-bar">
        <label class="icon-menu" for="menu-bar"></label> 
        <nav class="menu">
          <a v-if="is_auth" v-on:click="loadHome">Home</a>
          <a v-if="is_auth" v-on:click="ReservationsLeaseholder">Mis reservas</a>
          <a v-if="is_auth" v-on:click="vehiclesCatalog">Alquilar un carro</a>
          <a v-if="is_auth" v-on:click="team">Nuestro equipo</a>
          <a v-if="is_auth" v-on:click="logOut">Cerrar Sesión</a>
          <a v-if="!is_auth" v-on:click="loadLogIn">Iniciar Sesión</a>
          <a v-if="!is_auth" v-on:click="loadSignUp">Registrarse</a>
          

<!--
          <a href="">Inicio</a>
          <a href="">Alquilar un carro</a>
          <a href="">Proveedores</a>
          <a href="">Iniciar sesión</a>
-->
       </nav>
      </div>
    </header>
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
      <footer>
       <div class="contenedor">
         <p class="copy">Rentti &copy; 2021</p>
         <div class="sociales">
           <a class="icon-facebook" href="#"></a>
           <a class="icon-twitter" href="#"></a>
           <a class="icon-instagram" href="#"></a>
           <a class="icon-youtube" href="#"></a>
         </div>
       </div>
     </footer> 
  </div>  
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      is_auth: false,
    };
  },
  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;
      if (this.is_auth == false) 
        this.$router.push({ name: "logIn" });
      else 
        this.$router.push({ name: "home" });
    },
    loadHome: function () {
      this.$router.push({ name: "home" });
    },
    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
    vehiclesCatalog: function () {
      this.$router.push({ name: "VehiclesCatalog" });
    },
    team: function () {
      this.$router.push({ name: "Team" });
    },
    ReservationsLeaseholder: function () {
      this.$router.push({ name: "ReservationsLeaseholder" });
    },
    ReservationEdition: function () {
      this.$router.push({ name: "ReservationEdition" });
    },
    

    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },
    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("userid", data.id);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },
  },
  created: function() {
    this.verifyAuth();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap');
 @font-face {
  font-family: 'fontello';
  src: url('font/fontello.eot?97480950');
  src: url('font/fontello.eot?97480950#iefix') format('embedded-opentype'),
       url('font/fontello.woff2?97480950') format('woff2'),
       url('font/fontello.woff?97480950') format('woff'),
       url('font/fontello.ttf?97480950') format('truetype'),
       url('font/fontello.svg?97480950#fontello') format('svg');
  font-weight: normal;
  font-style: normal;
 }
 /* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
 /* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
 /*
 @media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'fontello';
    src: url('../font/fontello.svg?97480950#fontello') format('svg');
  }
 }
 */
 [class^="icon-"]:before, [class*=" icon-"]:before {
  font-family: "fontello";
  font-style: normal;
  font-weight: normal;
  speak: never;

  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  /* opacity: .8; */

  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;

  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;

  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: .2em;

  /* you can be more comfortable with increased icons size */
  /* font-size: 120%; */

  /* Font smoothing. That was taken from TWBS */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
 }

 .icon-twitter:before { content: '\f099'; } /* '' */
 .icon-menu:before { content: '\f0c9'; } /* '' */
 .icon-youtube:before { content: '\f16a'; } /* '' */
 .icon-instagram:before { content: '\f16d'; } /* '' */
 .icon-facebook:before { content: '\f308'; } /* '' */

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body{
  font-family:'Open Sans', sans-serif;
  background-color: #D2F5F0;
 }
 header{
  width: 100%;
  height: 50px;
  background: #003153; 
  color:#fff;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
 }
 .contenedor{
  width: 98%;
  margin: auto;
 }
 h1{
   float: left;
 }
 .header-logo {
  width: 3.7rem;
}
 header .contenedor{
   display: table;
 }
 section{
   width: 100%;
   margin-bottom: 25px;
 }
 #menu-bar{
  display: none; 
 }
 header label{
   float: right;
   font-size: 28px;
   margin: 6px 0;
   cursor: pointer;
 }
 .menu {
   position: absolute;
   top: 50px;
   left: 0%;
   width: 100%;
   height: 100vh;
   background: #003153;
   transition: all 0.5s;
   transform: translateX(-100%);
 }
.header nav button{
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;

    border-radius: 5px;
    padding: 10px 20px;
  }
.header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }
 .menu a{
   display: block;
   color: #fff;
   height: 50px;
   text-decoration: none;
   padding: 15px;
   border-bottom: 1px solid #fff;
 }
 .menu a:hover{
   background: rgba(255,255 ,255 , 0.3);
 }
 #menu-bar:checked ~ .menu{
   transform: translateX(0%);
 }
 @media (min-width:1024px){
   .menu{
     position: static;
     width: auto;
     height: auto;
     transform: translateX(0%);
     float: right;
     display: flex;
   }
   .menu a{
     border: none;
   }
   header label {
     display: none;
   }
 }
 footer .contenedor{
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   padding-bottom: 25px;
 }
 .copy{
   font-size: 20px;
 }
 .sociales {
   width: 100%;
   text-align: center;
   font-size: 28px;
 }
 .sociales a{
   color: #041930;
   text-decoration: none;
 }
 @media (min-width: 768px){
   .sociales{
     width: auto;
   }
   footer .contenedor{
     justify-content: space-between;
   }
 }
</style>
