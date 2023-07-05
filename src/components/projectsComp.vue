<template>

  <div class="container">
    <div class="row">
        <div class="card" v-for="pro in projects" :key="pro.id">
<img src="https://i.postimg.cc/Fs7QznXb/stick-man.png" class="card-img-top">
<div class="card-body">
<h5 class="card-title">{{pro.name}}</h5>
<p class="card-text">{{pro.gitLink}}</p>
<button class="btnLinks"><a href="#">github repo</a></button>
<button class="btnLinks"><a href="#">Netilfy live view</a></button>
</div>
</div>
</div>
</div>

            

</template>

<script>
    export default {
      computed:{
            projects(){
                return this.$store.state.projects
            }
        },
        mounted(){
            this.$store.dispatch('fetchProjects')
        }
        
        
    }
</script>

<style scoped>
img{
  width: 13rem;
  margin: auto;
}
.btnLinks{
  padding: 3px;
  margin: 4px;
  background: #b4acac;
}
.btnLinks >a{
  text-decoration: none;
  color: black;
  padding: 3px;
  
}
.card{
  width: 23rem;
  height: 23rem;
  margin: 9px auto;

 
 

}
.container{
  display: flex;
}

.card-text{
  font-size: 14px;
}


@media only screen and (max-width: 390px){
  .card{
    width: 13rem;
    height: 13rem;
    margin: 4px auto;
  }
  img{
  display: none;
  }
}
</style>
