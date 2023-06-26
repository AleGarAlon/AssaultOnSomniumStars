class enemy1 {
    constructor(gameScreen){
    this.gameScreen = gameScreen;
    this.width = 50
    this.height = 100
    this.left = 760
    this.top = Math.floor(Math.random() * 520)
    this.element = document.createElement("img")

    this.element.src = './images/chaosSM1.png'


    this.element.style.width = `${this.width}px`;
    this.element.style.height =`${this.height}px`;

    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`


    this.element.style.position = "absolute"

    this.gameScreen.appendChild(this.element)

    }

    move() {
        this.left -= 0.7

        this.update()
  
    }

    update() {
       
        this.element.style.left = `${this.left}px`

    }
}