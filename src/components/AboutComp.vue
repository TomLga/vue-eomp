<template>
  <main> 
    
    <div class="container">

        <div class="mePic">
            <img src="https://i.postimg.cc/Fs7QznXb/stick-man.png" alt="" srcset="">
            <img src="https://i.postimg.cc/Fs7QznXb/stick-man.png" alt="" srcset="">
        </div>

        <div class="infoText">
            <p>I am a passionate and driven individual with a strong desire to have a better future. With a background in Web develompent I have gained the knownlegde and understanding of the basics in web development with a lot of room to grow. I am constantly seeking opportunities to learn, grow, and challenge myself both personally and professionally.</p>
                <p>     
                I thrive in dynamic environments where creativity and innovation are valued. I believe in the power of collaboration and enjoy working with diverse teams to solve problems and achieve shared goals.
                </p>
            
        </div>
        

    </div>
</main> 
<div class="dropBtn">

    <div class="dropup-center dropdown">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        navigate to ..
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="/resume">Resume</a></li>
          <li><a class="dropdown-item" href="/projects">Projects</a></li>
          <li><a class="dropdown-item" href="/testermonals">Testermonals</a></li>
        </ul>
      </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
main{
background: rgb(232, 226, 226);
border-radius: 10px;
width: 80% ;
margin:auto;
}


.container{
    display: grid;
    padding: 10px ;
    
}
.infoText{
    font-size: 25px;
    text-align: center;
 
    
}
.dropBtn{
    margin: 12px  45%;

}
.btn{
    background: #000000;
    color: white;
    text-transform: capitalize;
}
.dropdown-item:hover{
    background-color: rgb(0, 0, 0);
    color: white;
}
.mePic{
    align-items: center;
    justify-content: center;
    display: flex;
}











@media only screen and (max-width: 600px) {

    img{
        width: 3rem;
    }
    p{
        font-size: 20px;
    }
    .dropBtn{
        margin-left:30% ;
    }
    
}
@media only screen and (max-width: 923px) {
    img{
        width: 6rem;
    }
}


</style>