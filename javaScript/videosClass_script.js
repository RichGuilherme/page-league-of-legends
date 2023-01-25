const videoClass = document.querySelector("#videoClass")
const buttonClass = document.querySelectorAll(`button.buttonClass:nth-child(n)`)



const classes = ["Magos", "Lutadores", "Assassinos","Atiradores", "Tank"]


let indice = 0

setInterval(()=> {

    
    if(indice < 4){
        const number = (numero) => indice = numero + 1
        number(indice)
    }else{
        
        indice = 0
    }
    

    buttonClass[indice].style.opacity = "1"

    if(indice === 4){

        buttonClass[4].style.opacity = "1"
        buttonClass[indice-1].style.opacity = "0.5"

    }else if(indice ==! 4) {
        buttonClass[4].style.opacity = "0.5"
    }else{
        buttonClass[indice-1].style.opacity = "0.5"
    }


    videoClass.src = `/videos/video${classes[indice]}.mp4`


}, 6000)



function videoMago() {
    setTimeout(() => {
        videoClass.src =  "/videos/videoMagos.mp4"

        buttonClass[indice].style.opacity = "0.5"
        indice = 0
        buttonClass[indice].style.opacity = "1"
    }, 200)
}

function videoLutador() {
    setTimeout(() => {
        videoClass.src =  "/videos/videoLutadores.mp4"

        
        buttonClass[indice].style.opacity = "0.5"
        indice = 1
        buttonClass[indice].style.opacity = "1"
    }, 200)
}

function videoAssassino() {
    setTimeout(() => {
        videoClass.src =  "/videos/videoAssassinos.mp4"

        buttonClass[indice].style.opacity = "0.5"
        indice = 2
        buttonClass[indice].style.opacity = "1"
    }, 200)
}

function videoAtirador() {
    setTimeout(() => {
        videoClass.src =  "/videos/videoAtiradores.mp4"

        buttonClass[indice].style.opacity = "0.5"
        indice = 3
        buttonClass[indice].style.opacity = "1"
    }, 200)
}

function videoTanque() {
    setTimeout(() => {
        videoClass.src =  "/videos/videoTank.mp4"
        
        buttonClass[indice].style.opacity = "0.5"
        indice = 4
        buttonClass[indice].style.opacity = "1"
    }, 200)
}


