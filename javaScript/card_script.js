fetch("campeões.json")
.then(response => {
  response.json().then(dados => {
      var campeoesJson = dados.arraysDeExibição

      let index = 1
      
      const getExebição = (exebicao) => {
      
        const getArray = campeoesJson[exebicao]
      
        getArray.forEach((value, indexValue = 0) => {
          const getCampeao =  value.campeao
          const getDescricao = value.descricao   
          const getClass = value.classe
         
      
          const img =  document.querySelector(`#card_img${indexValue}`) 
          img.style.backgroundImage = `url(img/campeõesTelaMenu/${getClass}/${getCampeao}.jpg)`
          
          
           document.querySelector(`#trocarCampeao${indexValue}`).innerHTML = getCampeao
           document.querySelector(`#trocarDescricao${indexValue}`).innerHTML = getDescricao
          
        })
      }

      document.querySelector("#button_avanca").onclick = function () {
        getExebição(index)
        index++

      
      }
      
      document.querySelector("#button_back").onclick = function () {
         index === 1 ? index : index-- 
         getExebição(index - 1) 
         
      }
    })
})





 
    





