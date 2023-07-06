<template>
    <div>
     
      <div class="container">
        <div id="row" class="row">
            <div id="card" class=" card" v-for="test in testimonials" :key="test.id" style="width: 18rem;">
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
#row{
    margin: auto;
    width: 70rem;
}
.card{
    margin: 3px auto;
}
img{
    width: 15rem;
    margin: 9px auto;

}

@media only screen and (max-width:310px) {

    img{
        width: 9rem;
        margin: 9px auto;
    
    }
    .card-textTest{
        width: 13rem;
    }
    #row{
        margin: auto;
        width: 15rem;
    }
    
    
}

@media only screen and (max-width:1200px){
    #row{
        margin: auto;
        width: 40rem;
    }
}
@media only screen and (max-width:764px){
    #row{
        margin: auto;
        width: 30rem;
    }
}
@media only screen and (max-width:400px){
    #row{
        margin: auto;
        width: auto;
    }
}

</style>