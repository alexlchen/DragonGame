var states;
(function (states) {
    // This is where all the fun happens
    function scenario() {
        scene = new createjs.Container(); //a container is a nestable display list that allows you to work with compound display elements
        game_entrance = new objects.Label(" Now you are stand in front of the dragon den, you\n need to choose to go into the left cave or right cave.\n Left Cave: Green Dragon, Right Cave: Red Dragon.\n Hint: Green means peace, Red means brave.", "25px Arial", "#ff7700", 320, 200); //320,240
        scene.addChild(game_entrance); // add label to the stage
        /*
                game_cave1 = new objects.Label("Green dragon says:'You need to find the golden dragon to get the treasure.'", "20px Arial", "#ff7700", 320, 120);//320,240
                game_cave2 = new objects.Label("Red dragon says:'You need to find the yellow dragon to get the treasure.'", "20px Arial", "#ff7700", 320, 120);//320,240
        
                game_cave3 = new objects.Label("Yellow dragon says:'There is no treasure here, find my twin brother.'", "20px Arial", "#ff7700", 320, 120);//320,240
                game_cave4 = new objects.Label("White dragon says:'There is no yellow dragon here.", "20px Arial", "#ff7700", 320, 120);//320,240
        
                game_cave5 = new objects.Label("Blue dragon says:'The red dragon did not tell you the true.'", "20px Arial", "#ff7700", 320, 120);//320,240
                game_cave6 = new objects.Label("Golden dragon says:'Green dragon lied to you.'", "20px Arial", "#ff7700", 320, 120);//320,240
        
                game_cave7 = new objects.Label("Red dragon says:'You come to the wrong cave. my twin brother did not tell where to go?'", "20px Arial", "#ff7700", 320, 120);//320,240
                game_cave8 = new objects.Label("Orange dragon says:'Go away, don't border me.'", "20px Arial", "#ff7700", 320, 120);//320,240
        
                game_cave9 = new objects.Label("Yellow dragon says:'You found the treasures.'", "20px Arial", "#ff7700", 320, 120);//320,240
                game_cave10 = new objects.Label("Green dragon says:'No treasure here. Don't believe my twin brother.'", "20px Arial", "#ff7700", 320, 120);//320,240
        
                game_cave11 = new objects.Label("Blue dragon says:'Go back to find the yellow dragon.'", "20px Arial", "#ff7700", 320, 120);//320,240
                game_cave12 = new objects.Label("Pink dragon says:'You lost you game.'", "20px Arial", "#ff7700", 320, 120);//320,240
        
                game_cave13 = new objects.Label("Purple dragon says:'You have to believe the red dragon'", "20px Arial", "#ff7700", 320, 120);//320,240
                game_cave14 = new objects.Label("White dragon says:'Get out of my place'", "20px Arial", "#ff7700", 320, 120);//320,240
        
        */
        leftButton = new objects.Button("LeftCave", 250, 340);
        leftButton.on("click", clickLeftButton, this); //callback function from game.ts
        scene.addChild(leftButton);
        rightButton = new objects.Button("RightCave", 410, 340);
        rightButton.on("click", clickRightButton, this); //callback function from game.ts
        scene.addChild(rightButton);
        stage.addChild(scene);
    }
    states.scenario = scenario;
})(states || (states = {}));
//# sourceMappingURL=scenario.js.map