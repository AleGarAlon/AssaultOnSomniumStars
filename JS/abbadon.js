class abbadon {
    constructor(gameScreen, loopID){
    this.gameScreen = gameScreen;
    this.width = 150
    this.height = 150
    this.left = 650
    this.top = 200
    this.element = document.createElement("img")
    this.inDom = false
    this.abbadonLife = 10
    this.winScreen = document.getElementById("winScreen")
    this.loopID = loopID
    //this.win = false
    

    this.element.src = './images/abbadon.png'


    this.element.style.width = `${this.width}px`;
    this.element.style.height =`${this.height}px`;

    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`


    this.element.style.position = "absolute"

    this.gameScreen.appendChild(this.element)
    this.inDom = true

    this.element.addEventListener("click", (e) => {
       
       console.log (this.abbadonLife)
       this.abbadonLife -= 1
       if (this.abbadonLife === 0) {
        cancelAnimationFrame(this.loopID);
            this.gameScreen.style.display = "none";
            this.winScreen.style.display = 'flex';
       }


    })
}


    move() {
        this.left -= 0.2

        this.update()
  
    }

    update() {
       
        this.element.style.left = `${this.left}px`

    }
}