<template>
  
  <div class="container">
    <div class="flip-card" v-for="school in education" :key="school.id">
        <div class="flip-card-inner">
          <div class="flip-card-front">
          <h1>{{ school.place }}</h1>
          <div >
              <img id="imgContainer" :src=school.image>
          </div>

          <span>more info...</span>
          
          </div>
          <div class="flip-card-back">
              <p>{{ school.place }}</p> 
            <p>{{ school.time }}</p> 
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, similique maxime exercitationem molestiae sequi perferendis dolor, dolorum nisi autem ad amet fugiat aspernatur. Mollitia sunt illo dolorem aliquid, soluta obcaecati?</P>
          </div>
        </div>
      </div>
    </div>
  

 
</template>
<script>
    export default {
        computed:{
            education(){
                return this.$store.state.education
            }
        },
    mounted() {
        this.$store.dispatch('fetchEducation')
    }


}


</script>

<style>
#imgContainer{
    position: absolute;
    bottom: 50px;
    left: 60px;
}

span{
   position: absolute;
    bottom: 10px;
    float:start;
    font-style: italic;
    right: 20px;
}
.container{
    display: flex;
    margin:auto;
    justify-content: space-evenly;
}
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;

}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
 
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
 
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
img{
width:10rem;
}
</style>
<!-- fix postion of image  -->