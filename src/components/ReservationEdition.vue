<template>
    <div class="editar_Reserva">
      <div class="container_editar_Reserva">
        <h1>Editar Reserva</h1>
        <br><br>
        <form v-on:submit.prevent="updateReservation">
            <label>Precio diario</label>
            <input type="text" disabled v-model="reservation.total_price" placeholder="Precio" />
          <br/><br/>
          <label>Placa</label>
            <input type="text" disabled v-model="reservation.vehicle_plaque" placeholder="Placa" />
          <br/><br/>
            <label>Fecha de salida</label>
             <input type="date" name="fecha-salida-original" v-model="reservation.initial_date" class="fecha" >
          <br/>
            <label>Fecha de entrega</label>
            <input type="date" name="fecha-entrega-original" v-model="reservation.final_date" class="fecha" >
          <button type="submit">Modificar</button>
          <button type="button" class="btn btn-warning" v-on:click="getBack()">Cancelar</button>
        </form>
      </div>
    </div>

</template>

<script>
import axios from "axios";
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

import jwt_decode from "jwt-decode";

export default {
  
    name: "ReservationEdition",
    data(){
        return {
            reservation: {},
            leaseholderId: 0,
        }
    },
    components: {
        Datepicker,
    },
    created: async function() {
        this.getReservationID();
        this.getLeaseholderID();
    },
    methods: {
        
        
        getReservationID() {
            axios
                .get(`https://rentti-development.herokuapp.com/api/${this.$route.params.id}`, {
                    headers: {},
                })
                .then((result) => {
                    this.reservation = result.data;
                })
                .catch(() => {

                });
        },
        getLeaseholderID() {
                    let token = localStorage.getItem("token_access");
                    let userId = jwt_decode(token).user_id.toString();
                    this.leaseholderId = userId - 22;
               
                },
        updateReservation () {
            let sendUpdatedReservation = {
                    initial_date: this.reservation.initial_date + "T12:00",
                    final_date: this.reservation.final_date + "T12:00",
                    total_price: this.reservation.total_price,
                    leaseholder_id: this.leaseholderId,
                    vehicle_plaque: this.reservation.vehicle_plaque
               }
                    console.log(sendUpdatedReservation);
               axios.put(`https://rentti-development.herokuapp.com/api/${this.$route.params.id}`, sendUpdatedReservation,{
                headers: {},
                })
                .then(function (response) {
                    
                    console.log(response);
                    alert("Fechas de reserva modificadas exitosamente");
                    window.location.href = "../user/reservationsLeaseholder"
                 })
                .catch(function (error) {
                    console.log(error.name);
                 });
        },
        getBack() {
            window.location.href = "../user/reservationsLeaseholder"
        }
    }

}
</script>

<style >
.editar_Reserva {
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
  text-align: left;
}
 
.editar_Reserva h1 {
  color: #ffffff;
 
}
 
.editar_Reserva label {
  color: #133252;
}
 
.editar_Reserva form {
  width: 300px;
  padding: 10px
}
.editar_Reserva input {
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;
  border: 1px solid #283747;
}
.editar_Reserva button {
  width: 100%;
  height: 40px;
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}
.editar_Reserva button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}

</style>