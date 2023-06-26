class Game {
    constructor() {
        this.initialScreen = document.getElementById("initialScreen")
        this.gameScreen = document.getElementById("gameScreen")
        this.lostScreen = document.getElementById("lostScreen")
        this.player = new Player(this.gameScreen)
        this.enemy1 = [new enemy1(this.gameScreen)]
        this.enemy2 = []
        this.abbadon = []
        this.loopID
        this.deadCSM = 0
        this.gameScore = document.getElementById("score")
        this.gameOver = false;
        //this.win = false
        this.abbadonLife = 10



    }

    start() {
        this.initialScreen.style.display = 'none'
        this.gameScreen.style.display = "block"

        this.loop()
    }

    /*lose() {

        this.gameScreen.style.display = "none";
        this.lostScreen.style.display = 'flex';
        cancelAnimationFrame(this.loopID);
    }*/


    loop() {
        this.update()
        
        if (this.loopID % 100 === 0 ) {
            this.enemy1.push(new enemy1(this.gameScreen))
            console.log(this.enemy1.length)
            for (let i = 0; i < this.enemy1.length; i += 1) {
                this.enemy1[i].move()
                if (!this.enemy1[i].inDom) {
                    //console.log(this.deadCSM)
                    this.enemy1.splice(i, 1)
                    this.deadCSM += 1
                    console.log(`You have killed${this.deadCSM}`)                    
                    i -= 1
                }                     
            }
        }

        if (this.loopID % 300 === 0) {
            this.enemy2.push(new enemy2(this.gameScreen))
            
            for (let i = 0; i < this.enemy2.length; i += 1) {
                this.enemy2[i].move()
                if (!this.enemy2[i].inDom) {            
                    this.enemy2.splice(i, 1)
                    this.deadCSM += 1
                    console.log(`You have killed${this.deadCSM}`)                    
                    i -= 1
                }                      
            }
        }

        if (this.deadCSM === 1){
            this.abbadon.push(new abbadon(this.gameScreen))
            
        }

        /*if (this.abbadon.life === 0) {
            cancelAnimationFrame(this.loopID);
            this.gameScreen.style.display = "none";
            //this.lostScreen.style.display = 'flex';*/

        if (!this.gameOver) {
            this.loopID = requestAnimationFrame(() => this.loop())
        }
        

        

        else {
            cancelAnimationFrame(this.loopID);
            this.gameScreen.style.display = "none";
            this.lostScreen.style.display = 'flex';
        }
    }

    update() {

        
       for (let i = 0; i < this.enemy1.length; i += 1) {
            this.enemy1[i].move()
           
            if (this.enemy1[i].left <= 0) {
                this.gameOver = true
            }
        }
        
        for (let i = 0; i < this.enemy2.length; i += 1) {
            this.enemy2[i].move()
           
            if (this.enemy2[i].left <= 0) {
                this.gameOver = true
            }
        }
        for (let i = 0; i < this.abbadon.length; i += 1) {
            this.abbadon[i].move()

            if (this.abbadon.left <= 0) {
            this.gameOver = true
            }
        }
    }


}