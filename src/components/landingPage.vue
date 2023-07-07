<template>
 <main>
        <div class="container">
           <p id="typewriter">WELCOME TO MY PORTFOLIO </p> 
      
          </div>

       
    </main>
    
 
</template>

<script>

    export default {
 
    }
</script>

<style scoped>
main{
    background-color: rgb(163, 161, 156);
 
}
.container{
    width: 100%;
    height:700px;
   
    background-image: url('https://i.postimg.cc/d1yZr4Yf/mountain-icey.jpg');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  
   

    color: rgb(255, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 55px;
}
.div2{
       background-color:rgb(163, 161, 156);
}
button{
    margin: 20px;
    padding: 10px;
    
}
.arrowRight{
  margin-left: 30%;
}

@keyframes typing {
    0%{
        width: 10%;
    }
    100%{
        width: 80%;
    }
  } 
  
  #typewriter {
    overflow: hidden;
    border-right: .15em solid orange;
    white-space: nowrap;
    margin: 0;
    letter-spacing: .15em;
    animation: typing 1.4s steps(40, end), blink-caret .75s step-end infinite;
  }
  
  @keyframes blink-caret {
   0% {
     border-color: transparent;
     }
   50%{
    transform: rotate(1deg);
   }
    100%{
        border-color: transparent;
    }
  }

  @media only screen and (max-width: 1200px){
    #typewriter{
      font-size: 2rem;
      white-space: wrap;
      text-align: center;

      
     
    }

  }


  
</style>