<template>

    <div class="resume">
       
    <h1>RESUME</h1>
    <h3>Education</h3>
    <ResEducation/>
    <workComp/>
    
   
    
</div>
</template>

<script>

import ResEducation from '@/components/ResEducation.vue';
import workComp from '@/components/workComp.vue';
    export default {
    components: { 
        ResEducation,
        workComp,
        
    }
}
</script>

<style scoped>
.resume{
    background-image: url('https://i.postimg.cc/BQ1cPMfy/Untitled-design.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
</style>