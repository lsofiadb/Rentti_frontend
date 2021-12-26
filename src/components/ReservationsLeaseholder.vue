<template>
  <div id="table-container">
 
        <div class="card" id="card-1">
            <div class="card-header" id="card-header-1">
                <h1 style="color:white">Reservaciones</h1>
            </div>
            <div class="card-body" id="card-body">
               <table class="table" >
                   <thead>
                       <tr style="margin: 15px">
                           <th>Placa</th>
                           <th>Precio diario</th>
                           <th>Fecha inicial</th>
                           <th>Fecha entrega</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr v-for="reservation in reservations" :key="reservation.id" style="margin: deepskyblue">
                           <td>{{reservation.vehicle_plaque}}</td>
                           <td>$ {{(reservation.total_price).toFixed(2)}}</td>
                           <td>{{moment(reservation.initial_date).format(moment.HTML5_FMT.DATE)}}</td>
                           <td>{{moment(reservation.final_date).format(moment.HTML5_FMT.DATE)}}</td>
                           <td><button type="button">
                             <router-link :to="{name: 'ReservationsEdition', params:{id:reservation.id}}" style="font-size: 12px">Cambiar_Reserva</router-link>
                              </button>
                           </td>
                           <td>
                             
                               <button type="button" v-on:click="deleteReservation(reservation.id)" style="font-weight: bold">Cancelar_Reserva</button>
                             
                          </td>
                       </tr>
                   
                   </tbody>
               </table>
            </div>
        </div>
        <div class="relleno"> </div>
    </div>
</template>

<script>
import axios from "axios";
import moment from 'moment';
import jwt_decode from "jwt-decode";


export default {
    name: "ReservationLeaseholder",
    data: function () {
    return {
      moment,
      reservations: "",
      leaseholderId: 0,
    };
  },
  methods: {
    getData: async function () {
      axios
        .get(`https://rentti-development.herokuapp.com/api/`, {
          headers: {},
        })
        .then((result) => {
          let token = localStorage.getItem("token_access");
                    let userId = jwt_decode(token).user_id.toString();
                    this.leaseholderId = userId - 22;
                    console.log("storage: " + this.leaseholderId);
                    console.log(result.data);
                    this.reservations = result.data.filter(r => r.leaseholder_id == this.leaseholderId);
                    console.log(this.reservations);
                   
          // this.reservations = result.data;
          // console.log(this.reservations)
        })
        .catch(() => {});
    },
    deleteReservation: async function (id) {
      axios
        .delete(`https://rentti-development.herokuapp.com/api/${id}/delete`, {
          headers: {},
        })
        .then((result) => {
          this.reservations = result.data;
          console.log("Borrado")
          window.location.href = "/user/reservationsLeaseholder"
        })
        .catch((error) => {
          console.log(error);
        });
        
    },
    loadReservationEdition: function () {
      this.$router.push({ name: "ReservationsEdition", params:{id: this.reservations.id}});
    },
  },
  created: async function () {
    this.getData();
    this.deleteReservation();

  },
}

</script>


<style>
* {
  box-sizing: border-box;
  /* margin: 2px 5px; */
}
 
#card-header-1 {
    display: flex;
    justify-content: center;;
    align-items: center;
    margin-bottom: 50px;
}
 
#card-1 {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  border-radius: 10px;
  position: relative;
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  width: auto;
  /* height: 60%; */
  display: flex;
  flex-direction: column;
 
  align-items: center;
  padding: 30px;
  justify-content: space-around;
  box-shadow: 0 10px 80px -5px rgb(0, 0, 0);
}
 
 
#card-body-1 {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content:flex-start;  
}
 
#table-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  margin-top: 100px;
  flex: 1;
}
 
td {
  width: 150px;
}
 
/* .td {
  margin: 80px;
} */
 
.relleno {
  margin-bottom: 600px;
}
 
button {
  width: 100%;
  height: 40px;
  font-size: 12px;
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}
 
button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}


</style>