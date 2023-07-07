<template>
  
    <div id="cardOver" class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <router-link class="nav-link active" to="/re">Basic Information</router-link> 
            </li>
            <li class="nav-item active">
              <router-link class="links nav-link" to="/education">Education</router-link>
            </li>
            <li class="nav-item active">
              <a class="nav-link" aria-current="true" href="/workExp">Work Experience</a>
            </li>
          </ul>
        </div>

        <div class="card-body" v-for="res in resume" :key="res.id">
          <h5 class="card-title">{{ res.name }}</h5>

        <div class="d-flex gap-2 justify-content-center">
          <i class="bi bi-calendar-day"></i> 
          <span>{{ res.dob }}</span> <br>
        </div>
        <!-- email -->
          <div class="d-flex gap-2 justify-content-center">
            <i class="bi bi-envelope-at"></i>
            <span id="emailSpan">{{ res.email }}</span>
          </div>
          <!-- number -->
          <div class="d-flex gap-2 justify-content-center">
          <i class="bi bi-telephone-inbound"></i>
           <p>{{ res.call }}</p>
          </div>
          <!-- location -->
          <div class="d-flex gap-2 justify-content-center">
            <i class="bi bi-geo-alt"></i>
            <p class="card-text">{{ res.basicInfo }}</p>
          </div>

          <p id="cardSlidUp" class="card-textMoti">{{ res.motivation}}</p>
          <a href="https://drive.google.com/file/d/1JAu2E-zlseHNLwE-t8gpo2Y7Tn7G0tlv/view?usp=sharing" target="_blank">
            <button id="btnSub" type="submit" >View CV</button>
          </a>
        </div>
      </div>
</template>

<script>
export default{
  computed:{
    resume(){
      return this.$store.state.resume
    }
  },
    mounted(){
      this.$store.dispatch('fetchResume')  
    }
}

</script>

<style>

.card-body{
  width: 59rem;
  margin: auto;
 
}
#emailspan{
  font-style: italic;  
 
}
.card-textMoti{
 text-align: start;
  font-size: 26px;
  width: 70rem;
}
.card-title{
  text-decoration: underline;
  font-size: 30px;
 
 
}
#cardSlidUp {
  border-radius: 10px;
  position: relative;
  animation: slide-up 1s forwards;
  opacity: 0;
}

#btnSub{
  margin: 9px;

  padding: 5px;
  color: rgb(7, 7, 7);
  font-style: italic;

}
#btnSub:hover{
  background-color: rgb(1, 1, 1);
  color: rgb(255, 255, 255);
  outline-style:inset;
  outline-color: rgb(0, 0, 0);
  transform: rotate(10deg);
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@media only screen and (max-width:1320px){
  .card-textMoti{
 text-align: start;
  font-size:20px;
  width: 60rem;
 
}

}

@media only screen and (max-width:1000px){
  .card-textMoti{
 text-align: start;
  font-size:20px;
  width: 40rem;

}
.card-body{
  width: 39rem;
  margin: auto;
 
}
}
@media only screen and (max-width:700px){
  .card-textMoti{
 text-align: start;
  font-size:18px;
  width: 30rem;

}
.card-body{
  width: 29rem;
  margin: auto;
 
}
}
@media only screen and (max-width:500px){
  .card-textMoti{

  width: 18rem;
  font-size: 17px;
  

  
}
.card-body{
  width: 20rem;
 
}
}
@media only screen and (max-width:320px){
  .card-textMoti{

  width: 17rem;
  font-size: 16px;
;
  padding: 3px;
}
.card-body{
  width: 19rem;
 
}
}

</style>