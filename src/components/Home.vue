<template>
  <div>  
  
    <main>
        <section id="banner" >
          <img src="../imag/banner2.jpg">
          <div class="contenedor">
            <h2>RENTTI</h2>
            <p>La solución a los problemas de movilidad</p>
          </div>
        </section>      
    </main>
      <section id = "Bienvenidos">
          <h2>ALQUILER DE AUTOS FÁCIL, RÁPIDO Y SEGURO</h2> 
          <p>Dejanos ofrecerte los mejores vehiculos para que puedas disfrutar de un gran comodidad mientras conduces por los mejores lugares de la ciudad </p> 
      </section> 
      <section id="blog">
        <h3>¿Porqué elegirnos?</h3>
        <div class="contenedor">
          <article>
            <img src="../imag/tesla2.jpg" >
            <h4>Poseemos autos nuevos</h4>
          </article>
          <article>
            <img src="../imag/papeleo.jpg" >
            <h4>Poco papeleo</h4>
          </article>
          <article>
            <img src="../imag/economico2.jpg">
            <h4>Los mejores precios del mercado</h4>
          </article>
          <article>
            <img src="../imag/familia2.jpg">
            <h4>Ambiente Familiar</h4>
          </article>
        </div>
      </section> 
      <section id ="info">
        <h3>Nuestros clientes confirman nuestro compromiso para mejorar nuestra calidad todos los dias.</h3>
        <div class="contenedor">
          <div class="info-clientes">
            <img src="../imag/señora1.jpg" alt="">
            <h4>Maria Lopéz</h4>
            <p>"Logré encontrar todo lo que buscaba y ahora solo la recomiendo a todos mis amigos"</p>
          </div>
          <div class="info-clientes">
            <img src="../imag/hombre1.jpg" alt="">
            <h4>Jaime Rojas</h4>
            <p>"Una de las mejores plataformas que he tenido la oportunidad de probar"</p>
          </div>
          <div class="info-clientes">
            <img src="../imag/señora2.jpg" alt="">
            <h4>Sandra Gutierrez</h4>
            <p>"Desde que tuve la oportunidad de probarla ya no uso otra si se trata de buscar vehiculos"</p>
          </div>
          <div class="info-clientes">
            <img src="../imag/hombre2.jpg" alt="">
            <h4>Nicolas Calle</h4>
            <p>"Mi calificación son 5 estrellas, excelente servicio y los mejores vehiculos los tiene Rentti"</p>
          </div>
        </div>
      </section>              
  </div>	
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
 
 section {
   width: 100%;
   margin-bottom: 25px;
 }
 #banner {
   margin-top: 50px;
   position: relative;
 }
 #banner img {
     width: 100%;
     height: 100%;
   }
  #banner .contenedor{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: #ffffff;
  } 
  #banner h2{
    font-size: 28px;
  }
  @media (min-width: 480px){
    #banner h2 {
      font-size: 40px;
    }
  }
  @media (min-width: 768px){
     #banner {
       height: 300px;
       overflow: hidden;
     }
     #banner img {
       height: auto;
       margin-top: -100px;
     }
  }
  @media (min-width: 1024px){
    #banner img {
      margin-top: -400px;
    }
  }
  
 
 #Bienvenidos { 
   text-align: center;  
 }
 
 @media (min-width: 1024px){
   .contenedor{
     width: 1500px;
   }

 }
 
 #blog h3, h4 {
   text-align: center;
 }
 #blog .contenedor{
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
 }
 #blog article{
   margin: 15px;
 }
 #blog img{
   width: 100%;
   max-width:100%;  
 }
 #info {
   background: #041930;
   color: #fff;
   text-align: center;
   padding: 20px;
 }
 #info .contenedor{
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
 }
 .info-clientes {
   margin: 20px;
 }
 .info-clientes img {
   width: 180px;
   height: 180px;
   border-radius: 50%;
   border: 7px solid #fff;
 }
</style>