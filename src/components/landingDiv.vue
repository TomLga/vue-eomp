<template>
  <main>
    <div class="landingDivBG ">
      <h1>I'M LOGAN THOMAS - WELCOME TO MY PORTFOLIO</h1>


      <div class="wholeThing">


        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img id="smllPic" src="https://i.postimg.cc/gjzNLqyR/IMG-20230510-WA0011-removebg-preview.png"
                loading="lazy" class="img-fluid rounded-start" alt="...">
            </div>

            <div id="cardLanding" class="col-md-8">
              <div id="slideOutAnimatio" class="card-body">
                <h5 class="card-title">ABOUT ME </h5>
                <p id="textsmll" class="card-textLand">I am Logan Thomas, <Span
                    style="font-style:italic; font-size: 25px;">Aspring Web developer</Span> <br><br>
                  I am an avid learner and continuously seek out new knowledge and skills to stay ahead in an
                  ever-evolving world....</p>
              </div>
              <button>
                <router-link class="links" to="/about">Read more..</router-link>
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
  text-align: center;
}

.links {
  text-decoration: none;
  padding: 2rem;

}

#textsmll {
  font-size: 18px;
  white-space: wrap;
  width: fit-content;

}

.wholeThing {
  width: 700px;
  margin: auto;

}

.landingDivBG {
  width: fit-content;
  margin: auto;
  background: rgba(8, 8, 8, 0.11);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
  border: 1px solid rgba(218, 21, 21, 0.53);
}

@media only screen and (max-width: 790px) {
  .wholeThing {
    width: 400px;
    margin: auto;

  }

  #smllPic {
    width: 10rem;
    margin: 2px 25%;
  }

}

@media only screen and (max-width: 490px) {

  #smllPic {
    width: 5rem;
    margin: 2px 25%;
  }

  .wholeThing {
    width: 300px;
    margin: auto;

  }


}</style>