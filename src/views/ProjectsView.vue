<template>
    <div class="project">
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