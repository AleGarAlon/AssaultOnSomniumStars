class abaddon {
    constructor(gameScreen){
    this.gameScreen = gameScreen;
    this.width = 150
    this.height = 150
    this.left = 650
    this.top = 200
    this.element = document.createElement("img")
    this.inDom = false
    this.abaddonLife = 30
    this.bolterSound = document.getElementById("bolterSound")
    this.bolterSound.volume = 0.2;
    this.element.src = './Images/abaddon.png'
    this.inDom = true

    this.element.style.width = `${this.width}px`;
    this.element.style.height =`${this.height}px`;
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.position = "absolute"
    this.gameScreen.appendChild(this.element)
    

    this.element.addEventListener("click", (e) => { 
       this.abaddonLife -= 1
       console.log(this.abaddonLife)  
       this.bolterSound.play()
    })
}

move() {
        this.left -= 0.3
        this.update()
    }

    update() {
        this.element.style.left = `${this.left}px`

    }
}