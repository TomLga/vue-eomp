<template>
 
  <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <router-link class="nav-link" to="/resume">basic Info</router-link> 
          </li>
          <li class="nav-item active">
            <router-link class="links nav-link" to="/education">Education</router-link>
          </li>
          <li class="nav-item active">
            <a class="nav-link active" aria-current="true" href="/workExp">Work Experince</a>
          </li>
        </ul>
      </div>
      <div id="rowWork" class="row">
      <div class="card-bodyWork" v-for="job in work" :key="job.id">
        <h5 class="card-titleWork">{{ job.JobTitle }}</h5>
        <p class="card-textWork">{{ job.position }}</p>
        <p class="card-textWork">{{ job.duration}}</p>
      </div>
      </div>
    </div>
</template>

<script>
export default{
    computed:{
        work(){
            return this.$store.state.work
        }
    },
    mounted() {
        this.$store.dispatch('fetchWork')
    },
}
</script>
<style>
 #rowWork{
 width:100%;
 height: 100%;
 background-image: url('https://i.postimg.cc/BQ1cPMfy/Untitled-design.png');
 background-repeat: no-repeat;
 background-size: cover;
 }

 .card-bodyWork{
  margin: auto;
  padding: 20px;
 background-color:#919a9e;
  width: 30rem;
  height: 14rem;
 
 }
.card-titleWork{
  text-decoration: underline;
  font-size: 30px;
}
.card-textWork{
  font-size: 25px;


}
@media only screen and (max-width:960px)
{
  .card-bodyWork{
    margin: 9px auto;
  }
}
</style>









