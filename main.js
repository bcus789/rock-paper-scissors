const imgDiv = document.getElementById("images")
const humanScore = document.getElementById("human-score")
const computerScore = document.getElementById("computer-score")

let images = [
    "images/rock.png",
    "images/paper.png",
    "images/scissors.png"
]

function renderImages(){
    let playerImages = ""
    for (let i = 0; i<images.length; i++){
        playerImages += `<button><img class="player-img" src="${images[i]}"}></button>`
    }
    imgDiv.innerHTML = playerImages
}

renderImages()

