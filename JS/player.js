class Player {
    constructor(gameScreen) {
    this.gameScreen = gameScreen
    this.width = 50
    this.height = 100
    this.element = document.createElement("img")
    this.top = 260
    this.left = 0


    this.element.src = './images/BA.png'

    this.element.style.width = `${this.width}px`;
    this.element.style.height =`${this.height}px`;

    this.element.style.position = "absolute"

    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.marginLeft = "10px"

    this.gameScreen.appendChild(this.element)
    }
}