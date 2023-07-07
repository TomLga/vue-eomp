
<template>
  <div class="container">
    <div class="row">
      <div class="flip-card" v-for="task in projects" :key="task.id">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h1>{{ task.name }}</h1>
            <div>
              <img id="imgContainer" :src=task.image>
            </div>

            <span id="moreInfo">more info...</span>

          </div>
          <div class="flip-card-back">
            <p>{{ task.name }}</p>
            <a :href="task.gitLink" target="_blank" class="btn btn-primary" style="margin: 4px;"> GitHub</a>
            <a :href="task.netLink" target="_blank" class="btn btn-primary"> NetLify Live Link</a>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
}

.flip-card {
  background-color: transparent;
  width: 400px;
  height: 300px;
  margin: 12px auto;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 14px 14px 8px 0 rgba(0, 0, 0);
  border: 2px solid;

}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);

}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

}

.flip-card-front {

  color: black;

}

.flip-card-back {

  color: white;
  transform: rotateY(180deg);
}

#imgContainer {
  position: absolute;
  width: 10rem;
  bottom: 70px;
  left: 90px;

}

#moreInfo {
  position: absolute;
  bottom: 10px;
  float: start;
  font-style: italic;
  right: 20px;
  font-weight: 900;
}

@media only screen and (max-width: 400px) {
  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    margin: 12px auto;
  }

  #imgContainer {
    position: absolute;
    width: 8rem;
    bottom: 100px;
    left: 80px;

  }
}
</style>
<!-- fix postion of image  -->


<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects
    }
  },
  mounted() {
    this.$store.dispatch('fetchProjects')
  }
}
</script>
