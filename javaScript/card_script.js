const arraysDeExibição = [[ /*primeira exibição*/
    { campeao: 'Ahri',
      classe: 'magos',
      descricao: 'Raposa de nove cauda'},
    {campeao: 'Yasuo',
      classe: 'lutadores',
      descricao: 'O imperdoável'},
    {campeao: 'Zed',
     classe: 'assassinos',
      descricao: 'O mestre das sombras'},
    {campeao: 'Caitlyn',
    classe: 'atiradores',
     descricao: 'A xerife de piltover'},
    {campeao: 'Darius',
     classe: 'tanks',
     descricao: 'A mão de noxus'}
 ],[  /*Segunda exibição*/
  { campeao: 'Lux',
    classe: 'magos',
    descricao: 'A dama da luz'},
  {campeao: 'Fiora',
   classe: 'lutadores',
    descricao: 'A grande duelista'},
  {campeao: 'Akali',
   classe: 'assassinos',
    descricao: 's A assassina renegada'},
  {campeao: 'Jinx',
   classe: 'atiradores',
   descricao: 'O gatilho desenfreado'},
  {campeao: 'Braum',
   classe: 'tanks',
   descricao: 'O coração de freljord'}
],[ /*teceira exibição  */
  { campeao: 'Zoe',
    classe: 'magos',
    descricao: 'O aspecto do crepúsculo '},
  {campeao: 'Irelia',
    classe: 'lutadores',
    descricao: 'A dançarina das lâminas'},
  {campeao: 'Shaco',
    classe: 'assassinos',
    descricao: 'O bufão demoníaco'},
  {campeao: 'Ashe',
   classe: 'atiradores',
   descricao: 'A arqueira de gelo'},
  {campeao: 'Alistar',
   classe: 'tanks',
   descricao: 'O minotauro'}
],[ /*Quarta exibição */
  { campeao: 'Leblanc',
    classe: 'magos',
    descricao: 'A farsante'},
  {campeao: 'Ekko',
    classe: 'lutadores',
    descricao: 'O rapaz que estilhaçou o tempo'},
  {campeao: 'Talon',
    classe: 'assassinos',
    descricao: 'A sobmra da lâmina'},
  {campeao: 'Ezreal',
    classe: 'atiradores',
   descricao: 'O explorador pródigo'},
  {campeao: 'Leona',
   classe: 'tanks',
   descricao: 'A alvorada radiante'}
],[ /*quinta exibição */
  { campeao: 'Syndra',
    classe: 'magos',
    descricao: 'A soberana sombria'},
  {campeao: 'Lee Sin',
    classe: 'lutadores',
    descricao: 'O monge cego'},
  {campeao: "Kha'zix",
    classe: 'assassinos',
    descricao: 'O ceifador do vazio'},
  {campeao: 'Jhin',
    classe: 'atiradores',
   descricao: 'O virtuoso'},
  {campeao: 'Aatrox',
    classe: 'tanks',
   descricao: 'A espada darkin'}
]
]
 
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



 
    





