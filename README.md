# Assault on Somnium Stars

[Click here to see deployed game](https://alegaralon.github.io/AssaultOnSomniumStars/)

## Description
Assault on Somnium Stars is a game where players try to defend a planet from the vicious attack of a chaos space marines(CSM) warband. The game ends when one CSM reach the left side of the screen. And the player wins if he manage to defeat Abaddon The Despoiler itself. After the game ends, a score is calculated based on the amount of CSM.


## MVP
-You "click" on the enemys to destroy them.
-The CSM will spawn at the rigth side of the screen in a random position.
-There are 3 different types of CSM.
-The CSM type 1 moves to the left when the spawn.
-The CSM type 2 move to the left when spawns but faster than the CSM1.
-The boss CSM moves slowly to the left but have a lifespan on 30 "clicks". He will appeart after a certain amount of time in the middle of the screen rigth side.
-The player loses the game in ay space marines reach the left side of the game screen.
-The player wins the game if Abaddon is defeated
-A score is calculated based on the amount of CSM eliminated.


## Backlog
-Add sound to the screens and to the game.
-Add a score traker screen.
-Change the spawning logic.
-Add a new enemy.
-Add a kill all hability.


## Data structure
### logic.js
    EventListener(loadScreen)
    startGame()
    EventListener(startButton)
    EventListener(reloadButton)
    EventListener(restarButton)

### game.js
Game()
        this.initialScreen 
        this.gameScreen; 
        this.lostScreen;
        this.winScreen; 
        this.scoreScreen; 
        this.gameSound; 
        this.loseSound; 
        this.winSound; 
        this.bolterSound;
        this.forTheEmperor; 
        this.soulClaim; 
        this.player; 
        this.enemy1;
        this.loseScore; 
        this.winScore;
        this.marker; 
    start()
    loop()
        this.enemy1.push()
        this.enemy2.push()
        this.abaddon.push()
        checkWin()
        checkLose()
        requestAnimationFrame()
    update()
        enemy1.move()
        enemy2.move()
        abaddon.move()

### player.js
Player ()
    this.gameScreen
    this.width
    this.height
    this.element
    this.top
    this.left

### enemy1.js
enemy1()
        this.gameScreen
        this.width
        this.height
        this.left
        this.top
        this.element
        this.inDom
        this.bolterSound
    addEventListener()    
    move()
    update()
### enemy2.js
enemy2()
        this.gameScreen
        this.width
        this.height
        this.left
        this.top
        this.element
        this.inDom
        this.bolterSound
    addEventListener()    
    move()
    update()
### abaddon.js
enemy1()
        this.gameScreen
        this.width
        this.height
        this.left
        this.top
        this.element
        this.inDom
        this.abaddonLife
        this.bolterSound
    addEventListener()    
    move()
    update()



## States y States Transitions
-Start Screen. The screen shown when the page is load. 
-Game Screen. Where the game is played.
-Lose Screen. Screen shown when the player loses the game.
-Win Screen. screen shown when the player wins the game.


## Task
-Create the HTML file
-create CSS file
-Base game logic(start button)
-game class
-player class
-create enemy1 class
-lose contidion
-gameLoop()
-enemy2 class
-abbadon
-win condition


## Links


- [Slides Link](http://slides.com)
- [Github repository Link](https://github.com/AleGarAlon/AssaultOnSomniumStars)
- [Deployment Link](https://alegaralon.github.io/AssaultOnSomniumStars/)