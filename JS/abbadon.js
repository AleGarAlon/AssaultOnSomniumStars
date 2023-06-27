class abbadon {
    constructor(gameScreen){
    this.gameScreen = gameScreen;
    this.width = 150
    this.height = 150
    this.left = 650
    this.top = 200
    this.element = document.createElement("img")
    this.inDom = false
    this.abbadonLife = 30

    
    

    this.element.src = '../images/abbadon.png'


    this.element.style.width = `${this.width}px`;
    this.element.style.height =`${this.height}px`;

    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`


    this.element.style.position = "absolute"

    this.gameScreen.appendChild(this.element)
    this.inDom = true

    this.element.addEventListener("click", (e) => {
       
       
       this.abbadonLife -= 1
       console.log(this.abbadonLife)
       



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