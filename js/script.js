let slideIndex=1;
// variables globales
let  compteur = 0
let timer, elements, slides, slideWidth;

window.onload = () => {
    const diapo = document.querySelector(".diapo")
    elements = document.querySelector(".myslides")
     slides = Array.from(elements.children)
     
     // on calcule la largeur du diaporama
     slideWidth = diapo.getBoundingClientRect().width 
     let next = document.querySelector(".droite")
     let prev = document.querySelector(".gauche")
     next.addEventListener ("click", slideNext ) 
     prev.addEventListener ("click", slidePrev )
     
     // Automatiser le diaporama
     timer = setInterval(slideNext, 4000) 

     // Gérer le survol de la souris
     diapo.addEventListener("mouseover", stopTimer)
     diapo.addEventListener("mouseout", startTimer)

//Mise en oeuvre du "responsive"
window.addEventListener("resize", () => {
    slideWidth = diapo.getBoundingClientRect().width
    slideNext()
})
}
//cette fonction fait défiler le diaporama vers la droite
function slideNext(){
compteur++
 if(compteur == slides.length){
        compteur = 0 
     }
     let decal = -slideWidth * compteur
     elements.style.transform = `translateX(${decal}px)`
}

//cette fonction fait défiler le diaporama vers la gauche
function slidePrev(){
    compteur--
     if(compteur < 0){
            compteur = slides.length - 1
         }
         let decal =  - slideWidth * compteur
         elements.style.transform = `translateX(${decal}px)`
    }
    function stopTimer(){
        clearInterval(timer)

    }
    function startTimer(){
        timer = setInterval(slideNext, 4000)
    }
