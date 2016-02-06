/// <reference path="../config/config.ts" />

/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />

/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/image.ts" />
/// <reference path="../states/menu.ts" />


// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var scene: createjs.Container;
var stateFunction: any; // alias for our current state

// Game Variables
var helloLabel: objects.Label;
var gameNameLabel: objects.Label;
var game_face: objects.Label;
var game_entrance: objects.Label;
var game_cave1: objects.Label;
var game_cave2: objects.Label;
var game_cave3: objects.Label;
var game_cave4: objects.Label;
var game_cave5: objects.Label;
var game_cave6: objects.Label;
var game_cave7: objects.Label;
var game_cave8: objects.Label;
var game_cave9: objects.Label;
var game_cave10: objects.Label;
var game_cave11: objects.Label;
var game_cave12: objects.Label;
var game_cave13: objects.Label;
var game_cave14: objects.Label;


var startButton: objects.Button;
var leftButton: objects.Button;
var rightButton: objects.Button;

function init(): void {

    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    console.log("set up stage...");

    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    console.log("set up Ticker...");

    setupStats(); // sets up our stats counting
    state = config.PLAY_STATE;
    changeState();
    
}

// Main Game Loop
function gameLoop(event: createjs.Event): void {

    stats.begin(); // start counting
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // stop counting
}

// Setup Game Stats
function setupStats(): void {

    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Callback function / Event Handler for Start Button Click
function clickStartButton(event: createjs.MouseEvent): void {
    //game_face.text = game_entrance.text;
    //game_face.font = "20px Arial";
    //game_face.color = "#ff7700";

    state = config.PLAY_STATE;
    changeState();
    
}

function clickLeftButton(event: createjs.MouseEvent): void {

}

function clickRightButton(event: createjs.MouseEvent): void {

}

// state machine prep
function changeState(): void {
    
    // Launch various scenes
    switch (state) {
        case config.MENU_STATE:
            // show the menu scene
            console.log("Go to menu state...");
            stateFunction = states.menu;
            break;
        case config.PLAY_STATE:
            // show the play scene
            console.log("Go to play state...");
            stateFunction = states.scenario;
            break;
        case config.OVER_STATE:
            // show the game over scene
            break;
    }

    stateFunction();
}
 