<template>
  <div class="about">
 
    <h1>ABOUT PAGE</h1>
    <AboutComp/>
  </div>
</template>
<script>
import AboutComp from '@/components/AboutComp.vue';

export default{
  components:{
    AboutComp,
    
  }
}
</script>
<style>
.about{

 background-image: url('https://i.postimg.cc/BQ1cPMfy/Untitled-design.png');
 background-repeat: no-repeat;
 background-size: cover;
}

</style>
