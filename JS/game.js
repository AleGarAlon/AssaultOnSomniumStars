class Game {
    constructor() {
        this.initialScreen = document.getElementById("initialScreen")
        this.gameScreen = document.getElementById("gameScreen")
        this.lostScreen = document.getElementById("lostScreen")
        this.player = new Player(this.gameScreen)
        this.enemy1 = []
        this.score = document.querySelectorAll(".score")
        this.enemy2 = []
        this.abbadon = []
        this.loopID
        this.deadCSM = 0
        this.gameScore = document.getElementById("score")
        this.gameOver = false;
        this.winScreen = document.getElementById("winScreen")
        this.win = false


        this.score.forEach(element => {
            element.textContent = `${this.deadCSM}`;
          }); 
        
       



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
        //console.log(this.loopID)
        if (this.loopID % 100 === 0 ) {
            this.enemy1.push(new enemy1(this.gameScreen))
            
            
        }

        for (let i = 0; i < this.enemy1.length; i += 1) {
            this.enemy1[i].move()
            if (!this.enemy1[i].inDom) {
                //console.log(this.deadCSM)
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
                

                console.log(`You have killed${this.deadCSM}`)                    
                i -= 1
            }                      
        }


        if (this.abbadon.length === 1 && this.abbadon[0].abbadonLife <= 0){
            this.abbadon.splice(0, 1)
            this.win = true

        }

        if (this.loopID % 5000 === 0){
            this.abbadon.push(new abbadon(this.gameScreen)) 
            
        }

       if (this.win === true) {
            cancelAnimationFrame(() => this.loopID)
            this.gameScreen.style.display = "none";
            this.winScreen.style.display = 'flex';
        }

        else if (this.gameOver === true) {
            cancelAnimationFrame(() => this.loopID);
            this.gameScreen.style.display = "none";
            this.lostScreen.style.display = 'flex';
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
        for (let i = 0; i < this.abbadon.length; i += 1) {
            this.abbadon[i].move()

            if (this.abbadon[0].left < 0) {
            this.gameOver = true
            }
        }
    }


}