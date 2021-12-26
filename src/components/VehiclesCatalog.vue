<template>
  <div>
    <div class="vehicle-container">
      
        <div v-for="(item, i) in items" :key="item.plate" :item="item">
        <div class="card">
          <img v-bind:src="items.urls[i]" height="165" width="270" v-bind:[key]="text">
          <h2 class="price">${{ item.current_price }} COP p/d</h2>
          <h3>{{items.infor[i]}}</h3>
          <h4>{{ item.brand }} {{ item.model }}</h4>
          <h5>{{items.ubi[i]}}</h5>
          <h5>Placa: {{item.plate}}</h5>

          <router-link :to="{name: 'ReservationPanel', params:{id: item.plate}}" class="btn btn-info" style="color: crimson">Reservar</router-link>

        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "VehiclesCatalog",
  components: {},
  data: function () {
    return {
      items: "",
      key: "alt",
      text: "Vehicilo",
    };
  },
  methods: {
    list: function () {
      console.log(items);
    },
    getData: async function () {
      axios
        .get(`https://rentti-development.herokuapp.com/vehicle/`, {
          headers: {},
        })
        .then((result) => {
          this.items = result.data;
          var json =  result.data;
          let links = ["https://bit.ly/3Bi18og", "https://bit.ly/3mh1Aij","https://bit.ly/30UKajg","https://bit.ly/3nAvv4J","https://bit.ly/3EzgRl9","https://bit.ly/3nAhLqz","https://bit.ly/3pDlBld","https://bit.ly/3nzig3V","https://bit.ly/3vPD4b7","https://bit.ly/2ZB5f1T","https://bit.ly/3mgJkWe","https://bit.ly/3nvlmWS","https://bit.ly/3CeqiFE","https://bit.ly/2ZxcNTs","https://bit.ly/3baCMCt","https://bit.ly/3vL9weM","https://bit.ly/3mh4tjj","https://bit.ly/3EpBZu1","https://bit.ly/3ntwJP7","https://bit.ly/3BjyHXd","https://bit.ly/2ZpnaZz","https://bit.ly/3mifdxP","https://bit.ly/30TiIlZ","https://bit.ly/3bg1alX","https://bit.ly/3nwHVKH","https://bit.ly/3EaPn50","https://bit.ly/3CmmDFK"];
          this.items.urls = links;
          let info = ["2021 | 8.000km","2021 | 5.000km","2020 | 45.000km","2022 | 2.000km","2022 | 1.500km","2020 | 50.000km","2019 | 75.000km","2018 | 80.000km","2018 | 77.000km","2020 | 30.000km","2020 | 10.000km","2019 | 25.000km","2020 | 32.000km","2021 | 7.000km","2021 | 18.000km","2020 | 42.000km","2016 | 90.000km","2017 | 70.000km","2014 | 120.000km","2020 | 38.000km","2020 | 18.000km","2020 | 17.000km","2019 | 30.000km","2015 | 70.000km","2020 | 10.000km","2020 | 8.000km","2021 | 6.000km"];
          this.items.infor = info;
          let ubic = ["Usme-Bogotá D.C", "Garces Nabas-Bogotá D.C","Puente Aranda-Bogotá D.C","Engativa-Bogotá D.C","Suba-Bogotá D.C","Chicó-Bogotá D.C","Santa Isabel-Bogotá D.C","Usaquen-Bogotá D.C","Barrios Unidos-Bogotá D.C","Teusaquillo-Bogotá D.C","El Nogal-Bogotá D.C","Santa Barbara-Bogotá D.C","Arrosales-Bogotá D.C","Masuren-Bogotá D.C","Colina-Bogotá D.C","Polo-Bogotá D.C","Galerias-Bogotá D.C","Cedritos-Bogotá D.C","Kennedy-Bogotá D.C","Minuto de Dios-Bogotá D.C","Chapinero-Bogotá D.C","Suba-Bogotá D.C","Niza-Bogotá D.C","Country-Bogotá D.C","Chicó-Bogotá D.C","Rosales-Bogotá D.C","Cedritos-Bogotá D.C"];
          this.items.ubi = ubic;
        })
        .catch(() => {});
    },
  },
  created: async function () {
    this.getData();
  },
  
};
</script>

<style>
.vehicle-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btn btn-info{
  color: crimson;
}

.item h4 {
  font-size: 19px;
  line-height: 1.375em;
  font-weight: 400;
  font-style: italic;
  margin: 70px 0;
}

.item span {
  font-style: normal;
}

.card {
  width: 70%;
  margin: 20%;
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(242, 239, 245, 0.603);
  box-shadow: 0 0 5px gray;
}

p.description {
  font-style: 0.85rem;
}
p.text-muted {
  color: gray;
}
.view-vehicle-button {
  padding: 5px;
  background-color: rgb(39, 192, 144);
  border: none;
  color: rgb(233, 224, 224);
  font-weight: bolder;
  font-size: 1.8rem;
  border-radius: 5px;
  cursor: pointer;
}
@media (min-width: 500px) {
  .card {
    width: 310px;
    margin: 10px;
  }
}
.vehicle-container{
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: rgb(112, 128, 122);
  position: absolute; 
  top: 10%;
}
html, body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
body{
  
}


a{
  font-weight: bold;
  color: azure;
  text-decoration: none;
  margin: 0 5px 0 5px;
  font-size: 1.25rem;
}
  active {
    color: azure;

  }
</style>
