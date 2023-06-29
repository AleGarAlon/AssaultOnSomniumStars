class enemy1 {
    constructor(gameScreen){
    this.gameScreen = gameScreen;
    this.width = 50
    this.height = 100
    this.left = 760
    this.top = Math.floor(Math.random() * 500)
    this.element = document.createElement("img")
    this.inDom = false
    this.bolterSound = document.getElementById("bolterSound")
    this.bolterSound.volume = 0.2;
    this.element.src = './Images/chaosSM1.png'
    this.inDom = true

    this.element.style.width = `${this.width}px`;
    this.element.style.height =`${this.height}px`;
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.position = "absolute"

    this.gameScreen.appendChild(this.element)
    

    this.element.addEventListener("click", (e) => {
        this.element.remove()
        this.inDom = false
        this.bolterSound.play()
    })
}
    move() {
        this.left -= 0.5
        this.update()
    }

    update() {    
        this.element.style.left = `${this.left}px`
    }
}