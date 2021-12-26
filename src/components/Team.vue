<template>
    <div class="container-team">
        

<h2 class="ourteam" style="text-align:center; color:black">Our Team</h2>
<br>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="../assets/Laura.jpg" alt="Laura" style="width:100%">
      <div class="container">
        <h2>Laura Sofia Dueñas</h2>
        <p class="title">Developer & Scrum Master</p>
        <p>Systems Engineer student with big dreams and goals.</p>
        <p><strong>Values: </strong> Responsibility and Leadership.</p>
        <strong><p>Contact:</p> </strong>
        <p>lauraduenas1105@gmail.com</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="../assets/Jonathan.jpeg" alt="Jonathan" style="width:100%">
      <div class="container">
        <h2>Jhonathan Pumarejo</h2>
        <p class="title">Developer & Scrum Master</p>
        <p>Project manager and Systems Engineer.</p>
        <p><strong>Values: </strong> Leadership & Critical thinking</p>
        <strong><p>Contact:</p> </strong>
        <p>jhonatan.pumarejo.86@gmail.com</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="../assets/Sergio.jpeg" alt="Sergio" style="width:100%" >
      <div class="container">
        <h2>Sergio Medina</h2>
        <p class="title">Developer & Scrum Master</p>
        <p>Systems Engineer and Modern Languages.</p>
        <p><strong>Values: </strong> Responsibility and Empathy </p>
        <strong><p>Contact:</p> </strong>
        <p>sergiomsystem@gmail.com</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="../assets/Carlos.jpg" alt="Carlos" style="width:100%">
      <div class="container">
        <h2>Carlos Castañeda</h2>
        <p class="title">Developer & Scrum Master</p>
        <p>Systems Engineer student and drummer.</p>
        <p><strong>Values: </strong> Honesty, Sincerity and Adaptability </p>
        <strong><p>Contact:</p> </strong>
        <p>casta.0179@gmail.com</p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>


export default {
    name: "Team"
}
</script>


<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 25%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: rgb(31, 28, 28);
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

h2{
 color: black;
}

.subttile{
    color: white;

}

p{
    color: black;
}

.ourteam{
    font-size: 40;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
.container-team {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: rgb(112, 128, 122);
  position: absolute; 
  top: 20%;
}



</style>
