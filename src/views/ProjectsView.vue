<template>
    <div class="project">
        <h1>PROJECTS</h1>
        <projectsComp/>


    </div>
</template>

<script>
import projectsComp from '@/components/projectsComp.vue';

    export default {
        components:{
            projectsComp
        }
        
    }
</script>

<style scoped>
.project{
    background-image: url('https://i.postimg.cc/BQ1cPMfy/Untitled-design.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>