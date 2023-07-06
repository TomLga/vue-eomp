<template>

    <div class="resume">
       
    <h1>RESUME</h1>
    <basicInfo/>
    
    
   
    
</div>
</template>

<script>

import basicInfo from '@/components/basicInfo'
    export default {
    components: { 
        basicInfo
        
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