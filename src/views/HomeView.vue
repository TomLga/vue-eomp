<template>
  <div >
    <landingPage/>
    <landingDiv/>

  </div>
  <carouselComp/>
</template>



<script>
import landingPage from '../components/landingPage.vue';
import landingDiv from '@/components/landingDiv.vue';
import carouselComp from '@/components/carouselComp.vue';


export default{
  components:{
    landingPage,
    landingDiv,
    carouselComp
  },

    }
    </script>

<style>

</style>