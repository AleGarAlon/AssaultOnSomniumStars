class Game {
    constructor() {
       this.initialScreen = document.getElementById("initialScreen")
       this.gameScreen = document.getElementById("gameScreen")
       this.lostScreen = document.getElementById("lostScreen")
       this.player = new Player(this.gameScreen)

    }

    start () {
        this.initialScreen.style.display = 'none'
        this.gameScreen.style.display = "block"
    }
}