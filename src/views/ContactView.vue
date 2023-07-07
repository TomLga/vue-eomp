<template>
    
    <main class="center">
        <h1>CONNECT WITH ME </h1>
   
            <form action="https://formspree.io/f/maygywpq" target="_blank" method="POST">
        
        <div class="ContactForm">
            <label>Name</label>
            <input type="text"  name="Name" class="form-control" placeholder="e.g Jeffy" aria-label="Name" required minlength="1"
           
            oninvalid="this.setCustomValidity('Please Enter Your Name')"
            oninput="this.setCustomValidity('')">
          
            <label>Email</label>
            <input type="email" name="email" class="form-control" placeholder="e.g loganThomas@gmail.com" aria-label="Email"  required minlength="1"
           
            oninvalid="this.setCustomValidity('Please Enter Your Vaild Email')"
            oninput="this.setCustomValidity('')">
          
            <label>Message</label>
            <textarea type="text" name="msg" class="form-control" placeholder="Text" required minlength="1"
           
            oninvalid="this.setCustomValidity(At least 1 char is needed')"
            oninput="this.setCustomValidity('')"></textarea>
        
          <button id="btnSub1" type="submit" >SUBMIT</button>
        </div>
    
        </form>
        <div class="extraContact">
            <div class="infoContact">
            <p style="text-decoration: underline; font-size: 20px; margin:auto;">Contact Me Directly:</p>
            <P>Email: llogantthomas2@gmail.com</P>
           
            <p>Call me: +27 067 627 3770</p>
           </div>

            <div class="smallbox">
              <a href="https://api.whatsapp.com/send?phone=270676273770" target="_blank">
                <i class="fab fa-whatsapp fa-3x " style="color: #38db0a;"></i>
        
              </a>
              <a href="https://www.linkedin.com/in/your_profile" target="_blank">
                <i class="fab fa-linkedin fa-3x" ></i>
              </a>
              <a href="https://github.com/TomLga" target="_blank">
                <i class="fab fa-github fa-3x" style="color: rgb(255, 255, 255)"></i>
              </a>
            </div>
    
        </div>
    </main>


</template>

<script>

</script>


<style>
.center {
    background-image: url('https://i.postimg.cc/BQ1cPMfy/Untitled-design.png');
    background-repeat: no-repeat;
    background-size: cover;
   
}

h1{
    text-align: center;
}

.ContactForm{
    width: 70rem;
    margin: auto;
    background: #151616;
    

}
.form-control{
    margin: 10px;
    width: 69rem;
    font-size: 20px;
}
label{
    text-decoration: underline;
    text-decoration-color: rgb(237, 234, 234);
    text-decoration-style:dashed;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    color: white;
    padding-left: 9px;

}
input{
    height: 3rem;
}
 #btnSub1{
    margin: 9px;
    outline-style: dashed;
    outline-color: rgb(255, 255, 255);
    padding: 5px;
    background: transparent;
    color: white;
    font-style: italic;

}
#btnSub1:hover{
    background-color: white;
    color: black;
    outline-style:inset;
    outline-color: rgb(0, 0, 0);
    transform: rotate(10deg);
}

.extraContact{
    width:30%;
  
    border: 5px solid ;
    padding: 9px;
    margin: 9px auto;
    background: #000000;
    
    
}
.fab{
margin: auto;
}
.fab:hover{
    transform: rotate(15deg);

}
.infoContact{
    margin: auto;
    background: #000000;
    color: white;
}
@media only screen and (max-width: 1120px) {
    .ContactForm {
       width: 50rem;
    }
    .form-control{
        width: 47rem;
    }
  }
@media only screen and (max-width: 810px) {
    .ContactForm {
       width: 40rem;
    }
    .form-control{
        width: 37rem;
    }
  }
@media only screen and (max-width: 650px) {
    .ContactForm {
       width: 30rem;
    }
    .form-control{
        width: 29rem;
    }
    .extraContact{
        width:fit-content;
     
    }
  }
@media only screen and (max-width: 490px) {
    .ContactForm {
       width: 25rem;
    }
    .form-control{
        width: 23rem;
    }
    .extraContact{
        width:fit-content;
     
    }

  }
@media only screen and (max-width: 390px) {
    .ContactForm {
       width: 15rem;
    }
    .form-control{
        width: 13rem;
    }
  }

</style>