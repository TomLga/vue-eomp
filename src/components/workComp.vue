<template>
    <h1>Work</h1>

    <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">

          <div class="carousel-item active" v-for="job in work" :key="job.id" >
            <p>{{ job.JobTitle }}</p>
            <p>{{ job.position }}</p>
            <p>{{ job.duration }}</p>
           
          </div>
         
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
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
.carousel-item{
    margin: auto;
    background: #7A7676;
    width: 40rem;
    left: 400px;
    }
p{
  text-align: center;
}
</style>









