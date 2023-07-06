<template>
   
    <h1>I'M LOGAN THOMAS WELCOME TO MY PORTFOLIO</h1>
<div class="wholeThing">


    <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://i.postimg.cc/Fs7QznXb/stick-man.png" class="img-fluid rounded-start" alt="...">
          </div>

          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">ABOUT ME </h5>
              <p class="card-text">I am Logan Thomas, Aspring Web developer<br><br>
                I am an avid learner and continuously seek out new knowledge and skills to stay ahead in an ever-evolving world....</p>
            </div>
            <button>
              <router-link class="links" to="/about">Read more..</router-link>
            </button>
           
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
h1{
    text-align: center;
}
.links{
    text-decoration: none;
    padding: 2rem;
   
}
.card-text{
    font-size: 20px;
}

.wholeThing{
    width: 700px;
    margin: auto;
    

    
}

</style>