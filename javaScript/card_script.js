const img1 = document.querySelector("#card_img1")
const img2 = document.querySelector("#card_img2")
const img3 = document.querySelector("#card_img3")
const img4 = document.querySelector("#card_img4")
const img5 = document.querySelector("#card_img5")

const magos = ["Ahri", "Lux", "Zoe", "Leblanc", "Syndra"]
const lutadores = ["Yasuo", "Fiora", "Irelia", "Ekko", "LeeSin"]  // Cada nome representa imagem de um campeão no arquivo
const assassinos = ["Zed", "Akali", "Shaco", "Talon", "Khazix"]
const atiradores = ["Caitlyn", "Jinx", "Ashe", "Ezreal", "Jhin"]
const tanques = ["Darius", "Braum", "Alistar", "Leona", "Aatrox"]

let index = 1
function buttonProxImagem () {


switch(index){
    case 0:
        index++
        break;
    case 1:
        img1.style.backgroundImage = `url(img/campeõesTelaMenu/magos/${magos[1]}.jpg)`
        document.querySelector("#trocarCampeao1").innerHTML = "Lux"
        document.querySelector("#trocarDescricao1").innerHTML = "A dama da luz"

        img2.style.backgroundImage = `url(img/campeõesTelaMenu/lutadores/${lutadores[1]}.jpg)`
        document.querySelector("#trocarCampeao2").innerHTML = "Fiora"
        document.querySelector("#trocarDescricao2").innerHTML = "A grande duelista"

        img3.style.backgroundImage = `url(img/campeõesTelaMenu/assassinos/${assassinos[1]}.jpg)`
        document.querySelector("#trocarCampeao3").innerHTML = "Akali"
        document.querySelector("#trocarDescricao3").innerHTML = "A assassina renegada"

        img4.style.backgroundImage = `url(img/campeõesTelaMenu/atiradores/${atiradores[1]}.jpg)`
        document.querySelector("#trocarCampeao4").innerHTML = "Jinx"
        document.querySelector("#trocarDescricao4").innerHTML = "O gatilho desenfreado"

        img5.style.backgroundImage = `url(img/campeõesTelaMenu/tanks/${tanques[1]}.jpg)`
        document.querySelector("#trocarCampeao5").innerHTML = "Braum"
        document.querySelector("#trocarDescricao5").innerHTML = "O coração de Freljord"

        index++
        break;
    case 2:
        img1.style.backgroundImage = `url(img/campeõesTelaMenu/magos/${magos[2]}.jpg)`
        document.querySelector("#trocarCampeao1").innerHTML = "Zoe"
        document.querySelector("#trocarDescricao1").innerHTML = "O aspecto do crepúsculo"

        img2.style.backgroundImage = `url(img/campeõesTelaMenu/lutadores/${lutadores[2]}.jpg)`
        document.querySelector("#trocarCampeao2").innerHTML = "Irelia"
        document.querySelector("#trocarDescricao2").innerHTML = "A dançarina das lâminas"

        img3.style.backgroundImage = `url(img/campeõesTelaMenu/assassinos/${assassinos[2]}.jpg)`
        document.querySelector("#trocarCampeao3").innerHTML = "Shaco"
        document.querySelector("#trocarDescricao3").innerHTML = "O bufão demoníaco"

        img4.style.backgroundImage = `url(img/campeõesTelaMenu/atiradores/${atiradores[2]}.jpg)`
        document.querySelector("#trocarCampeao4").innerHTML = "Ashe"
        document.querySelector("#trocarDescricao4").innerHTML = "A arqueira do gelo"

        img5.style.backgroundImage = `url(img/campeõesTelaMenu/tanks/${tanques[2]}.jpg)`
        document.querySelector("#trocarCampeao5").innerHTML = "alista"
        document.querySelector("#trocarDescricao5").innerHTML = "O minotauro"

        index++
        break;
    case 3:
        img1.style.backgroundImage = `url(img/campeõesTelaMenu/magos/${magos[3]}.jpg)`
        document.querySelector("#trocarCampeao1").innerHTML = "Leblanc"
        document.querySelector("#trocarDescricao1").innerHTML = "A farsante"

        img2.style.backgroundImage = `url(img/campeõesTelaMenu/lutadores/${lutadores[3]}.jpg)`
        document.querySelector("#trocarCampeao2").innerHTML = "Ekko"
        document.querySelector("#trocarDescricao2").innerHTML = "O rapaz que estilhaçou o tempo"

        img3.style.backgroundImage = `url(img/campeõesTelaMenu/assassinos/${assassinos[3]}.jpg)`
        document.querySelector("#trocarCampeao3").innerHTML = "Talon"
        document.querySelector("#trocarDescricao3").innerHTML = "A sombra da lâmina"

        img4.style.backgroundImage = `url(img/campeõesTelaMenu/atiradores/${atiradores[3]}.jpg)`
        document.querySelector("#trocarCampeao4").innerHTML = "Ezreal"
        document.querySelector("#trocarDescricao4").innerHTML = "O explorador pródigo"

        img5.style.backgroundImage = `url(img/campeõesTelaMenu/tanks/${tanques[3]}.jpg)`
        document.querySelector("#trocarCampeao5").innerHTML = "Leona"
        document.querySelector("#trocarDescricao5").innerHTML = "A alvorada radiante"

        index++
        break;
    case 4:
        img1.style.backgroundImage = `url(img/campeõesTelaMenu/magos/${magos[4]}.jpg)`
        document.querySelector("#trocarCampeao1").innerHTML = "Syndra"
        document.querySelector("#trocarDescricao1").innerHTML = "A soberana sombria"
        
        img2.style.backgroundImage = `url(img/campeõesTelaMenu/lutadores/${lutadores[4]}.jpg)`
        document.querySelector("#trocarCampeao2").innerHTML = "Lee Sin"
        document.querySelector("#trocarDescricao2").innerHTML = "O monge cedo"

        img3.style.backgroundImage = `url(img/campeõesTelaMenu/assassinos/${assassinos[4]}.jpg)`
        document.querySelector("#trocarCampeao3").innerHTML = "Kha'zix"
        document.querySelector("#trocarDescricao3").innerHTML = "O ceifador do vazio"

        img4.style.backgroundImage = `url(img/campeõesTelaMenu/atiradores/${atiradores[4]}.jpg)`
        document.querySelector("#trocarCampeao4").innerHTML = "Jhin"
        document.querySelector("#trocarDescricao4").innerHTML = "O virtuoso"

        img5.style.backgroundImage = `url(img/campeõesTelaMenu/tanks/${tanques[4]}.jpg)`
        document.querySelector("#trocarCampeao5").innerHTML = "Aatrox"
        document.querySelector("#trocarDescricao5").innerHTML = "A espada darkin"
        
        index++
        break;
}
}

function buttonbackImagem() {
if(index == 1){
    indice = 0
}else{
    indice = index - 2
    index--
}



    switch(indice){
        case 0:
            img1.style.backgroundImage = `url(img/campeõesTelaMenu/magos/${magos[0]}.jpg)`
            document.querySelector("#trocarCampeao1").innerHTML = "Ahri"
            document.querySelector("#trocarDescricao1").innerHTML = "Raposa de nove caudas"
    
            img2.style.backgroundImage = `url(img/campeõesTelaMenu/lutadores/${lutadores[0]}.jpg)`
            document.querySelector("#trocarCampeao2").innerHTML = "Yasuo"
            document.querySelector("#trocarDescricao2").innerHTML = "O imperdoável"
    
            img3.style.backgroundImage = `url(img/campeõesTelaMenu/assassinos/${assassinos[0]}.jpg)`
            document.querySelector("#trocarCampeao3").innerHTML = "Zed"
            document.querySelector("#trocarDescricao3").innerHTML = "O mestre das sombras"
    
            img4.style.backgroundImage = `url(img/campeõesTelaMenu/atiradores/${atiradores[0]}.jpg)`
            document.querySelector("#trocarCampeao4").innerHTML = "Caitlyn"
            document.querySelector("#trocarDescricao4").innerHTML = "A xerife de piltover"
    
            img5.style.backgroundImage = `url(img/campeõesTelaMenu/tanks/${tanques[0]}.jpg)`
            document.querySelector("#trocarCampeao5").innerHTML = "Darius"
            document.querySelector("#trocarDescricao5").innerHTML = "A mão de noxus"

            break;
        case 1:
            img1.style.backgroundImage = `url(img/campeõesTelaMenu/magos/${magos[1]}.jpg)`
            document.querySelector("#trocarCampeao1").innerHTML = "Lux"
            document.querySelector("#trocarDescricao1").innerHTML = "A dama da luz"
    
            img2.style.backgroundImage = `url(img/campeõesTelaMenu/lutadores/${lutadores[1]}.jpg)`
            document.querySelector("#trocarCampeao2").innerHTML = "Fiora"
            document.querySelector("#trocarDescricao2").innerHTML = "A grande duelista"
    
            img3.style.backgroundImage = `url(img/campeõesTelaMenu/assassinos/${assassinos[1]}.jpg)`
            document.querySelector("#trocarCampeao3").innerHTML = "Akali"
            document.querySelector("#trocarDescricao3").innerHTML = "A assassina renegada"
    
            img4.style.backgroundImage = `url(img/campeõesTelaMenu/atiradores/${atiradores[1]}.jpg)`
            document.querySelector("#trocarCampeao4").innerHTML = "Jinx"
            document.querySelector("#trocarDescricao4").innerHTML = "O gatilho desenfreado"
    
            img5.style.backgroundImage = `url(img/campeõesTelaMenu/tanks/${tanques[1]}.jpg)`
            document.querySelector("#trocarCampeao5").innerHTML = "Braum"
            document.querySelector("#trocarDescricao5").innerHTML = "O coração de Freljord"
            

            indice--
            break;
        case 2:
            img1.style.backgroundImage = `url(img/campeõesTelaMenu/magos/${magos[2]}.jpg)`
            document.querySelector("#trocarCampeao1").innerHTML = "Zoe"
            document.querySelector("#trocarDescricao1").innerHTML = "O aspecto do crepúsculo"
    
            img2.style.backgroundImage = `url(img/campeõesTelaMenu/lutadores/${lutadores[2]}.jpg)`
            document.querySelector("#trocarCampeao2").innerHTML = "Irelia"
            document.querySelector("#trocarDescricao2").innerHTML = "A dançarina das lâminas"
    
            img3.style.backgroundImage = `url(img/campeõesTelaMenu/assassinos/${assassinos[2]}.jpg)`
            document.querySelector("#trocarCampeao3").innerHTML = "Shaco"
            document.querySelector("#trocarDescricao3").innerHTML = "O bufão demoníaco"
    
            img4.style.backgroundImage = `url(img/campeõesTelaMenu/atiradores/${atiradores[2]}.jpg)`
            document.querySelector("#trocarCampeao4").innerHTML = "Ashe"
            document.querySelector("#trocarDescricao4").innerHTML = "A arqueira do gelo"
    
            img5.style.backgroundImage = `url(img/campeõesTelaMenu/tanks/${tanques[2]}.jpg)`
            document.querySelector("#trocarCampeao5").innerHTML = "alista"
            document.querySelector("#trocarDescricao5").innerHTML = "O minotauro"
             
            indice--
            break;
        case 3:
            img1.style.backgroundImage = `url(img/campeõesTelaMenu/magos/${magos[3]}.jpg)`
            document.querySelector("#trocarCampeao1").innerHTML = "Leblanc"
            document.querySelector("#trocarDescricao1").innerHTML = "A farsante"
    
            img2.style.backgroundImage = `url(img/campeõesTelaMenu/lutadores/${lutadores[3]}.jpg)`
            document.querySelector("#trocarCampeao2").innerHTML = "Ekko"
            document.querySelector("#trocarDescricao2").innerHTML = "O rapaz que estilhaçou o tempo"
    
            img3.style.backgroundImage = `url(img/campeõesTelaMenu/assassinos/${assassinos[3]}.jpg)`
            document.querySelector("#trocarCampeao3").innerHTML = "Talon"
            document.querySelector("#trocarDescricao3").innerHTML = "A sombra da lâmina"
    
            img4.style.backgroundImage = `url(img/campeõesTelaMenu/atiradores/${atiradores[3]}.jpg)`
            document.querySelector("#trocarCampeao4").innerHTML = "Ezreal"
            document.querySelector("#trocarDescricao4").innerHTML = "O explorador pródigo"
    
            img5.style.backgroundImage = `url(img/campeõesTelaMenu/tanks/${tanques[3]}.jpg)`
            document.querySelector("#trocarCampeao5").innerHTML = "Leona"
            document.querySelector("#trocarDescricao5").innerHTML = "A alvorada radiante"
    

            indice--
            break;
        case 4:
            img1.style.backgroundImage = `url(img/campeõesTelaMenu/magos/${magos[4]}.jpg)`
            document.querySelector("#trocarCampeao1").innerHTML = "Syndra"
            document.querySelector("#trocarDescricao1").innerHTML = "A soberana sombria"
            
            img2.style.backgroundImage = `url(img/campeõesTelaMenu/lutadores/${lutadores[4]}.jpg)`
            document.querySelector("#trocarCampeao2").innerHTML = "Lee Sin"
            document.querySelector("#trocarDescricao2").innerHTML = "O monge cedo"
    
            img3.style.backgroundImage = `url(img/campeõesTelaMenu/assassinos/${assassinos[4]}.jpg)`
            document.querySelector("#trocarCampeao3").innerHTML = "Kha'zix"
            document.querySelector("#trocarDescricao3").innerHTML = "O ceifador do vazio"
    
            img4.style.backgroundImage = `url(img/campeõesTelaMenu/atiradores/${atiradores[4]}.jpg)`
            document.querySelector("#trocarCampeao4").innerHTML = "Jhin"
            document.querySelector("#trocarDescricao4").innerHTML = "O virtuoso"
    
            img5.style.backgroundImage = `url(img/campeõesTelaMenu/tanks/${tanques[4]}.jpg)`
            document.querySelector("#trocarCampeao5").innerHTML = "Aatrox"
            document.querySelector("#trocarDescricao5").innerHTML = "A espada darkin"
    
 
            indice--
            break;
    
    }
}


 
    





