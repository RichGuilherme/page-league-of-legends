let index = 1

const getExebição = (exebicao) => {

  const getArray = arraysDeExibição[exebicao]

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

function buttonProxImagem () {
  getExebição(index)
  index++
}

function buttonBackImagem() {
   index === 1 ? index : index-- 
   getExebição(index - 1) 
}



 
    





