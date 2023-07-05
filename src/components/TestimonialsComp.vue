<template>
    <div>
        <h1>Testimonials</h1>
      <div class="container">
        <div class="row">
            <div class="card" v-for="test in testimonials" :key="test.id" style="width: 18rem;">
  <img src="https://i.postimg.cc/Fs7QznXb/stick-man.png" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{test.name}}</h5>
    <p class="card-text">{{test.msg}}</p>
  </div>
</div>
</div>
</div>
    </div>


</template>

<script>
    export default {
        computed:{
            testimonials(){
                return this.$store.state.testimonials
            }
        },
        mounted(){
            this.$store.dispatch('fetchTestimonials')
        }
        
        
    }
</script>

<style scoped>

.card{
    margin: 4rem;
}

</style>