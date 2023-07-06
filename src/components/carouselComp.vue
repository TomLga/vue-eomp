<template>
    <div>
        <div class="carousel">
            <img src="https://i.postimg.cc/Mpq7P50X/360-F-526854857-FFbu7oodab-Yd-X5-Gae-Pa-E6-Vr-E0-I5x-Gz-YR.jpg" alt="Image 1">
            <img src="https://i.postimg.cc/CLLnmsFW/Gear-Wireless-Gaming-Mice-Kone-Pro-Air.webp" alt="Image 2">
            <img src="https://i.postimg.cc/cLMnK8vb/google-logo.png" alt="Image 3">
          </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.carousel {
    width: 50%;
    height: 300px; 
    position: relative;
    overflow: hidden;
    margin: auto;
  }
  
  .carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 1s ease-in;
  }
  
  @keyframes changeImage {
    0% {
      opacity: 0;
    } 
    50%{
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
  .carousel img:nth-child(1) {
    animation: changeImage 9s infinite;
  }
  .carousel img:nth-child(2) {
    animation: changeImage 9s infinite 3s;
  }
  .carousel img:nth-child(3) {
    animation: changeImage 9s infinite 6s;
  }

</style>