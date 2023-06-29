class Game {
    constructor() {
        this.initialScreen = document.getElementById("initialScreen")
        this.gameScreen = document.getElementById("gameScreen")
        this.lostScreen = document.getElementById("lostScreen")
        this.winScreen = document.getElementById("winScreen")
        this.scoreScreen = document.getElementById("scoreScreen")
        this.gameSound = document.getElementById("gameSound")
        this.loseSound = document.getElementById("loseSound")
        this.winSound = document.getElementById("winSound")
        this.bolterSound = document.getElementById("bolterSound")
        this.forTheEmperor = document.getElementById("forTheEmperor")
        this.soulClaim = document.getElementById("soulClaim")
        this.player = new Player(this.gameScreen)
        this.enemy1 = []
        this.loseScore = document.getElementById("loseScore")
        this.winScore = document.getElementById("winScore")
        this.marker = document.getElementById("marker")
        this.enemy2 = []
        this.abaddon = []
        this.loopID
        this.deadCSM = 0
        this.gameOver = false;
        this.win = false
    
        this.gameSound.volume = 0.1;
        this.loseSound.volume = 0.2;
        this.winSound.volume = 0.2;
        this.forTheEmperor.volume = 0.3;
        this.soulClaim.volume = 0.2;
        this.bolterSound.volume = 0.2;
     
        this.loseScore.innerHTML = `${this.deadCSM}`
        this.marker.innerHTML = `${this.deadCSM}`
    }

    start() {
        this.initialScreen.style.display = 'none'
        this.gameScreen.style.display = "block"
        this.scoreScreen.style.display = "flex"
        this.forTheEmperor.play()
        this.gameSound.play()
        this.loop()
    }

    loop() {
        this.update()
        this.marker.innerHTML = `${this.deadCSM}`
        //console.log(this.loopID)
        this.winScore.innerHTML = `${this.deadCSM}`
        this.loseScore.innerHTML = `${this.deadCSM}`
        if (this.loopID % 100 === 0 ) {
            this.enemy1.push(new enemy1(this.gameScreen))  
        }

        for (let i = 0; i < this.enemy1.length; i += 1) {
            this.enemy1[i].move()
            if (!this.enemy1[i].inDom) { 
                this.enemy1.splice(i, 1)
                this.deadCSM += 1                  
                i -= 1
            }                     
        }

        if (this.loopID % 300 === 0) {
            this.enemy2.push(new enemy2(this.gameScreen))
        }
        for (let i = 0; i < this.enemy2.length; i += 1) {
            this.enemy2[i].move()
            if (!this.enemy2[i].inDom) {            
                this.enemy2.splice(i, 1)
                this.deadCSM += 1                                   
                i -= 1
            }                      
        }
        if (this.abaddon.length === 1 && this.abaddon[0].abaddonLife <= 0){
            this.abaddon.splice(0, 1)
            this.win = true
        }
        if (this.loopID % 5000 === 0){
            this.abaddon.push(new abaddon(this.gameScreen))    
        }
       if (this.win === true) {
            this.deadCSM += 30
            this.winScore.innerHTML = `${this.deadCSM}`
            cancelAnimationFrame(() => this.loopID)
            this.gameScreen.style.display = "none";
            this.scoreScreen.style.display = "none";
            this.winScreen.style.display = 'flex';
            this.gameSound.pause()
            this.winSound.play()
        }
        else if (this.gameOver === true) {
            cancelAnimationFrame(() => this.loopID);
            this.gameScreen.style.display = "none";
            this.scoreScreen.style.display = "none";
            this.lostScreen.style.display = 'flex';
            this.gameSound.pause()
            this.soulClaim.play()
            this.loseSound.play()
        }  
        else if (!this.gameOver || !this.win) {
            this.loopID = requestAnimationFrame(() => this.loop())
        }   
    }

    update() {
       for (let i = 0; i < this.enemy1.length; i += 1) {
            this.enemy1[i].move() 
            if (this.enemy1[i].left < 0) {
                this.gameOver = true
            }
        }
        
        for (let i = 0; i < this.enemy2.length; i += 1) {
            this.enemy2[i].move() 
            if (this.enemy2[i].left < 0) {
                this.gameOver = true
            }
        }
        for (let i = 0; i < this.abaddon.length; i += 1) {
            this.abaddon[i].move()

            if (this.abaddon[0].left < 0) {
            this.gameOver = true
            }
        }
    }
}