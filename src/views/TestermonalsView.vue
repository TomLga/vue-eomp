<template>
    <div>
        <h1>TESTERMONALS</h1>
      <div class="container">
        <div class="row">
            <div class="card" v-for="info in Testermonals" :key="info.id" style="width: 18rem;">
  <img src="https://i.postimg.cc/7YZy1Mr2/css-logo.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{info.name}}</h5>
    <p class="card-text">{{info.msg}}</p>
  </div>
</div>
</div>
</div>
    </div>


</template>

<script>
    export default {
        computed:{
            Testermonals(){
                return this.$store.state.Testermonals
            }
        },
        mounted(){
            this.$store.dispatch('fecthTestermonals ')
        }
        
    }
</script>

<style scoped>

</style>