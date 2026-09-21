$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100, 600, 290, 20, "red");
createPlatform(500, 650, 290, 20, "red");
createPlatform(500, 500, 20, 20, "red");
createPlatform(750, 500, 20, 20, "red");
createPlatform(900, 600, 290, 20, "red");
createPlatform(900, 400, 290, 20, "red");
createPlatform(900, 300, 290, 20, "red");
createPlatform(160, 200, 350, 20, "red");
createPlatform(750, 250, 20, 20, "red");

    // TODO 3 - Create Collectables
createCollectable("diamond", 120, 170, 0.5, 0.7);
createCollectable("database", 1050, 170, 0.5, 0.7);
createCollectable("max", 170, 170, 0.5, 0.7);
createCollectable("steve", 1200, 100);



    
    // TODO 4 - Create Cannons
createCannon("top", 250, 600);
createCannon("right", 330, 1500);
createCannon("top", 750, 900);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
