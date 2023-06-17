fetch("campeões.json")
.then(response => {

  response.json()
    .then(dados => {
      const campeoesJson = dados.arraysDeExibição

      let numeroExibicao = 1
      
      const getExebicao = (exebicao) => {
      
        const getArray = campeoesJson[exebicao]
        
        criaElementos(getArray)
      }
      
      const criaElementos = (array = []) => {

        array.forEach(({campeao = "", descricao = "", classe = ""}, indexValue = 0) => {
         
          const getCampeao =  campeao
          const getDescricao = descricao   
          const getClass = classe
         
      
          const img =  document.querySelector(`#card_img${indexValue}`) 
          img.style.backgroundImage = `url(img/campeõesTelaMenu/${getClass}/${getCampeao}.jpg)`
          
          
           document.querySelector(`#trocarCampeao${indexValue}`).innerHTML = getCampeao
           document.querySelector(`#trocarDescricao${indexValue}`).innerHTML = getDescricao
          
        })
      }

      document.querySelector("#button_avanca").onclick = function () {
        getExebicao(numeroExibicao)
        numeroExibicao++
      }
      
      document.querySelector("#button_back").onclick = function () {
         numeroExibicao === 1 ? numeroExibicao : numeroExibicao-- 
         getExebicao(numeroExibicao - 1) 
         
      }
    })
})




 
    





