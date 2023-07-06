<template>
    <div>
        <h1>Testimonials</h1>
      <div class="container">
        <div class="row">
            <div class="card" v-for="test in testimonials" :key="test.id" style="width: 18rem;">
  <img :src="test.image" >
  <div class="card-body">
    <h5 class="card-title">{{test.name}}</h5>
    <p class="card-textTest">{{test.msg}}</p>
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
h1{
    text-align: center;
    font-size: 60px;
}
.card{
    margin:4rem;
}
img{
    width: 15rem;
    margin: 9px auto;

}
.card-textTest{
    width: fit-content;
}

</style>