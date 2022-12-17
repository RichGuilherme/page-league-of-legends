const videoClass = document.querySelector("#videoClass")

const classes = ["Magos", "Lutadores", "Assassinos","Atiradores", "Tank"]


let indice = 0

setInterval(()=> {
         
    if(indice < 4){
        const number = (numero) => indice = numero + 1
        number(indice)
    }else{

        indice = 0
    }

        videoClass.src =  `/videos/video${classes[indice]}.mp4`

}, 6000)


function videoMago() {
    setTimeout(() => {
        videoClass.src =  "/videos/videoMagos.mp4"

        indice = 0
    }, 350)
}
function videoLutador() {
    setTimeout(() => {
        videoClass.src =  "/videos/videoLutadores.mp4"

        indice = 1
    }, 350)
}
function videoAssassino() {
    setTimeout(() => {
        videoClass.src =  "/videos/videoAssassinos.mp4"

        indice = 2
    }, 350)
}
function videoAtirador() {
    setTimeout(() => {
        videoClass.src =  "/videos/videoAtiradores.mp4"
        
        indice = 3
    }, 350)
}
function videoTanque() {
    setTimeout(() => {
        videoClass.src =  "/videos/videoTank.mp4"

        indice = 4
    }, 350)
}