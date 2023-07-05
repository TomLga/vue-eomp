<template>
    
    <main class="center">
        <h1>CONNECT WITH ME </h1>
   
            <form action="https://formspree.io/f/maygywpq" target="_blank" method="POST">
        
        <div class="ContactForm">
            <label>Name</label>
            <input type="text"  name="Name" class="form-control" placeholder="e.g Jeffy" aria-label="Name" required>
          
            <label>Email</label>
            <input type="email" name="email" class="form-control" placeholder="e.g loganThomas@gmail.com" aria-label="Email" required>
          
            <label>Message</label>
            <textarea type="text" name="msg" class="form-control" placeholder="Text" required></textarea>
        
          <button id="btnSub" type="submit" >SUBMIT</button>
        </div>
    
        </form>


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
 #btnSub{
    margin: 9px;
    outline-style: dashed;
    outline-color: rgb(255, 255, 255);
    padding: 5px;
    background: transparent;
    color: white;
    font-style: italic;

}
#btnSub:hover{
    background-color: white;
    color: black;
    outline-style:inset;
    outline-color: rgb(0, 0, 0);
    transform: rotate(10deg);
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
  }
@media only screen and (max-width: 490px) {
    .ContactForm {
       width: 25rem;
    }
    .form-control{
        width: 23rem;
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