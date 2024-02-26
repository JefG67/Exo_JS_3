// On récupère l'élément #board
const board = document.querySelector("#board");

// On crée une box avec la class "carree"
const box = document.createElement("div")
box.classList.add("carree")

for (let i = 1; i <= 4; i++) {
    const newBox = box.cloneNode(); // Clone des divs
    newBox.textContent = i; // Numéro écrit dans le bloc
    board.appendChild(newBox);
}


let newCarre = document.querySelectorAll(".carree")

newCarre.forEach(function(carree){
    // console.log(newCarre)
    
    carree.addEventListener("click", function(){
        carree.classList.toggle("click")
        console.log(carree)
    })
})
