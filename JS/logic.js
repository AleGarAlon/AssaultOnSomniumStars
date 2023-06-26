window.addEventListener("load", () => {
    const startButton = document.getElementById("starBtn");
    const restartButton = document.getElementById("restartButton");
    let game;
  
    startButton.addEventListener("click", function () {
      console.log("start");
      startGame()
    });

    function startGame () {
        console.log("For the Emperor")
        game = new Game()
        game.start()


      
    }

    



  });
