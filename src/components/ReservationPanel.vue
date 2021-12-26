<template>
    <div class="formulario_Registro">
      <div class="container_formulario_Registro">
        <h2>Formulario de Registro</h2>
       
        <form v-on:submit.prevent="addReservation">
            <label>Placa del vehiculo</label>
            <input type="text" disabled v-model="carReservation.plate"/>
          <br/><br/>
            <label>Precio alquiler del vehiculo diario</label>
            <input type="text" disabled v-model="carReservation.current_price"/>
          <br/><br/>
            <label>Nombre del agente comercial</label>
            <input type="text" disabled v-model="supplierCar.commercial_agent_name"/>
          <br/><br/>
            <label>Correo del agente comercial</label>
            <input type="text" disabled v-model="supplierCar.agent_email_address"/>
          <br/><br/>
            <label>Telefono del agente comercial</label>
            <input type="text" disabled v-model="supplierCar.agent_telephone_number"/>
          <br/><br/>
            <label>Fecha de salida</label>
            <input type="date" name="fecha-salida-original" v-model="carReservation.initial_date" class="fecha" >
          <br/>
            <label>Fecha de entrega</label>
            <input type="date" name="fecha-final-original" v-model="carReservation.final_date" class="fecha" >
          <button type="submit">Reservar</button>
          <br/><br/>
            <p form-text>¡Felicitaciones! Estás muy cerca de reservar tu carro.
                Por favor selecciona las fechas de tu reserva,
                y luego ponte en contacto con la empresa proveedora del carro,
                ya sea por correo o teléfono. No olvides que puedes contactarnos.
                Rentti siempre contigo.</p>
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
       
    name: "ReservationPanel",
    data(){
        return {
            carReservation: {},
            userId: localStorage.getItem("userid"),
            leaseholderId: 0,
            supplierCar: {}
        }
    },
    components: {
        Datepicker,
    },
    created: async function() {
        this.getInfoID();
    },
    methods: {
        
        getInfoID() {
            axios
                .get(`https://rentti-development.herokuapp.com/vehicle/${this.$route.params.id}`, {
                    headers: {},
                })
                .then((result) => {
                    
                    let token = localStorage.getItem("token_access");
                    let userId = jwt_decode(token).user_id.toString();
                    this.leaseholderId = userId - 22;
                    console.log("storage: " + this.leaseholderId);

                    
                    this.carReservation = result.data;

                    this.getSupplier();
                })
                .catch((error) => {
                    console.log(error);
                });
                },
            getSupplier() {
                axios
                    .get(`https://rentti-development.herokuapp.com/supplier/${this.carReservation.supplier_id}`, {
                        headers: {},
                    })
                    .then((result) => {
                        this.supplierCar = result.data;
                    })
                    .catch(() => {

                    });
                },
            addReservation() {
                // console.log(this.carReservation);
                // console.log(this.supplierCar)
                // console.log(this.leaseholderId)
                let sendReservation = {
                    initial_date: this.carReservation.initial_date + "T12:00",
                    final_date: this.carReservation.final_date + "T12:00",
                    total_price: this.carReservation.current_price,
                    leaseholder_id: this.leaseholderId,
                    vehicle_plaque: this.carReservation.plate
               }

               console.log(sendReservation);

               axios.post('https://rentti-development.herokuapp.com/api/create', sendReservation,{
                headers: {},
                })
                .then(function (response) {
                    console.log(sendReservation);
                console.log(response);
                alert("Reserva exitosa");
                 })
                .catch(function (error) {
                    console.log(error.name);
                 });
            }
    }
};
</script>
<style>
    .formulario_Registro {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  border-radius: 10px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  padding: 20px;
  box-shadow: 0 10px 80px -5px rgb(0, 0, 0);
  text-align: left;
}
 
.formulario_Registro h2 {
  color: #ffffff;
 
}
 
.formulario_Registro label {
  color: #133252;
}
 
.formulario_Registro form {
  width: 300px;
  padding: 10px
}
.formulario_Registro input {
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