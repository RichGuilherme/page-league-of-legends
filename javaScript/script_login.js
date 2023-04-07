document.querySelector(".login_submit").onclick = function () {

    const password = document.querySelector(".password_input")
    const nick = document.querySelector(".nick")
    
    
    if(nick.value.length < 3){
         nick.style.borderColor = "red"
     }
      else if(password.value.length < 3){
               nick.style.borderColor = "#d3ab5c"
               password.style.borderColor = "red" 
      }
      else {
        window.location.reload(true)
        sessionStorage.setItem("Nickname", input.value);
      }
    
    }
