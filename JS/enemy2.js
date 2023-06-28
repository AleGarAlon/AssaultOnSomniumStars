class enemy2 {
    constructor(gameScreen){
    this.gameScreen = gameScreen;
    this.width = 80
    this.height = 80
    this.left = 720
    this.top = Math.floor(Math.random() * 500)
    this.element = document.createElement("img")
    this.inDom = false
    this.bolterSound = document.getElementById("bolterSound")
    this.bolterSound.volume = 0.2;

    this.element.src = './Images/chaosSM2.png'


    this.element.style.width = `${this.width}px`;
    this.element.style.height =`${this.height}px`;

    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`


    this.element.style.position = "absolute"

    this.gameScreen.appendChild(this.element)
    this.inDom = true

    this.element.addEventListener("click", (e) => {
        this.element.remove()
        this.inDom = false
        this.bolterSound.play()
        

    })
}


    move() {
        this.left -= 0.8

        this.update()
  
    }

    update() {
       
        this.element.style.left = `${this.left}px`

    }
}