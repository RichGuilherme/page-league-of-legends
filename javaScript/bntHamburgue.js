      // ativamento do botão hamburgue 
      const menuSection = document.querySelector('.menu-section')
      const menuSectionBackground = document.querySelector('.menu-section-background')
      const hamburgueToggle = document.querySelector('#bnt-hamburgueToggle')
      const closeToggle = document.querySelector('#bnt-closeToggle')
     hamburgueToggle.addEventListener("click", () => {
          menuSection.style.display = "block"
          menuSectionBackground.style.display = "block"
     })
     closeToggle.addEventListener("click", () => {
          menuSection.style.display = "none"
          menuSectionBackground.style.display = "none"
     })
      const social = document.querySelector('#menu-section-option-social')
      const arrowDrop = document.querySelector('#arrow_drop_down')
      const subOption = document.querySelector('.menu-section-subOption')
      social.addEventListener("click", () =>{
         if(subOption.style.display != "block"){
             subOption.style.display = "block"
             arrowDrop.innerHTML = "arrow_drop_up"
         }else{
             subOption.style.display = "none"
             arrowDrop.innerHTML = "arrow_drop_down"
         }
      })
         