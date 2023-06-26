class Game {
    constructor() {
       this.initialScreen = document.getElementById("initialScreen")
       this.gameScreen = document.getElementById("gameScreen")
       this.lostScreen = document.getElementById("lostScreen")
       this.player = new Player(this.gameScreen)
       this.enemy1 = [new enemy1(this.gameScreen)]
       this.loopID
       this.deadCSM = 0
       this.gameScore = document.getElementById("score")



    }

    start () {
        this.initialScreen.style.display = 'none'
        this.gameScreen.style.display = "block"

        this.loop()
    }

    lose () {
        
        this.gameScreen.style.display = "none"
        this.lostScreen.style.display = 'flex'
        


        clearInterval(this.loopID);
    }


    loop() {
        this.update()
        /*if (Math.random() < 1 / 200) {
            const newEnemy = new enemy1(this.gameScreen);
            this.enemy1.push(newEnemy);
        }*/
        if (this.loopID % 100 === 0 /*&& this.enemy1.length < 15*/) {
            this.enemy1.push(new enemy1(this.gameScreen))
            console.log(this.enemy1.length)
          }


        this.loopID = requestAnimationFrame(() => this.loop())
    }

    update() {
        const deadEnemies = []

        this.enemy1.forEach(enemy => {
            enemy.move()
            enemy.element.addEventListener("click", function() {
                enemy.element.remove()
                this.deadCSM += 1

            })
            if (enemy.left <= 0){
                this.lose()
            }





        })

        /*if (this.enemy1.left < this.player.left) {
            console.log("has perdido")
        }*/

        
    }

    
}