<template>
  <div id="card-titleEdu" class="card text-center">
    <div id="tabs" class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <router-link class="nav-link" to="/resume">Basic Information</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="links nav-link active" to="/education">Education</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="links nav-link" to="/workExp">Work Experience </router-link>
        </li>
      </ul>
    </div>
    <div id="cardSlidUp">
      <div id="row" class="row">
        <div class="card-bodyEdu" v-for="school in education" :key="school.id">
          <h5 class="card-titleEdu">{{ school.place }}</h5>
          <img id="imgEdu" :src="school.image" alt="">
          <p class="card-textEdu">{{ school.time }}</p>
          <p class="card-textEdu">{{ school.qualification }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.education
    }
  },
  mounted() {
    this.$store.dispatch('fetchEducation')
  }
}

</script>

<style>
.card-bodyEdu {
  border-bottom: 9px solid;
  width: 19rem;
  margin: 10% auto;
  border: 2px solid;
  font-weight: 800;
}

#imgEdu {
  width: 9rem;
  background-color: rgb(3, 3, 3);
}

#row {
  width: 100%;
  background-image: url('https://i.postimg.cc/BQ1cPMfy/Untitled-design.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.card-titleEdu {
  text-decoration: underline;
  margin: 20px;
}

#cardSlidUp {
  border-radius: 10px;
  position: relative;
  animation: slide-up 2s forwards;
  opacity: 0;
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>