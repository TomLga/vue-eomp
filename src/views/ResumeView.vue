<template>

    <div class="resume">
       

    <basicInfo/>
    <SkillsComp/>
</div>
</template>

<script>

import basicInfo from '@/components/basicInfo'
import SkillsComp from '@/components/skillsComp.vue';
    export default {
    components: {
    basicInfo,
    SkillsComp
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