<template>

    <h1>skills </h1>

    <div class="container">
      <div  id="cardSlidUp" class="row" style="margin: 9px;">
        <div class="col-md-4">
          <div class="card">
            <img  src="https://i.postimg.cc/JhZw7pZ9/HTML5-logo-and-wordmark-svg.png" class="card-img-topSkills" alt="Bootstrap Logo">
            <div class="card-bodySkills">
              
              <p class="card-textSkills">-Intermediate</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="https://i.postimg.cc/7YZy1Mr2/css-logo.png" class="card-img-topSkills" alt="JavaScript Logo">
            <div class="card-bodySkills">
              <p class="card-textSkills">-Intermediate</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="https://i.postimg.cc/SsLTj1sK/javascript-logo.png" class="card-img-topSkills" alt="HTML Logo">
            <div class="card-bodySkills">
              <p class="card-textSkills">-Beginner</p>
            </div>
          </div>
        </div>
      </div>
      <div id="cardSlidU" class="row" style="margin: 9px;">
        <div class="col-md-4">
          <div class="card">
            <img src="https://i.postimg.cc/t41QwqTR/bootstrap-logo-shadow.png" style="width: 8rem;" class="card-img-topSkills" alt="CSS Logo">
            <div class="card-bodySkills">
              <p style="text-decoration: underline; font-size:19px">Bootstrap</p>
              <p class="card-textSkills">-Intermediate</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card" style="height: 11.7rem;">
            <img src="https://i.postimg.cc/sXCHjC38/node-ja.jpg" style="width: 12rem; " class="card-img-topSkills" alt="Node.js Logo">
            <div class="card-bodySkills">
              <p class="card-textSkills">-Intermediate</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="https://i.postimg.cc/pL59jPbC/vue-js-logo.png" style="width: 9rem;" class="card-img-topSkills" alt="MySQL Logo">
            <div class="card-bodySkills">
              <p  class="card-textSkills">-Fundamental</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  
</template>

<style>

.card-textSkills{
  width: 7rem;
  font-style: italic;
  margin-left: 9px;
  font-size: 17px;
  
}
.card-img-topSkills{
  width: 9rem;
  margin: auto;
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