var inquirer = require("inquirer");

function Player(name, position, offense, defense){
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;

  // Good Game
  this.goodGame = function(){
    if(Math.floor(Math.random() * 2) === 0){
      this.offense++;
      console.log(`${this.name}'s offense is now ${this.offense}'`)
    } else {
      this.defense++;
      console.log(`${this.name}'s defense is now ${this.defense}'`)
    }
  }
  // Bad Game
  this.badGame = function(){
    if(Math.floor(Math.random() * 2) === 0){
      this.offense--;
      console.log(`${this.name}'s offense is now ${this.offense}`)
    } else {
      this.defense--;
      console.log(`${this.name}'s defense is now ${this.defense}`)
    }
  }

  // Print stats
  this.printStats = function(){
    console.log(
`
Name: ${this.name}
Position: ${this.position}
Offense: ${this.offense}
Defense: ${this.defense}
`
    )
  }
}

var player = new Player("eric", "power forward", 7, 5);
player.printStats();
player.goodGame();
player.badGame();
player.printStats();

var team = [] // should be three total by the time I'm done
var starters = [] // start with 2
var subs = [] // start with 1

function createPlayer(){
  inquirer.prompt([
    {
      message: "Player's Name",
      type: "input",
      name: "name"
    },
    {
      message: "Player's position",
      type: "input",
      name: "position"
    },
    {
      message: "Player's Offense",
      type: "input",
      name: "offense",
      validate: function(value){
        if(isNaN(value) === false &&
            parseInt(value) > 0 &&
            parseInt(value) <= 10){
              return true;
            }
        return false;
      }
    },
    {
      message: "Player's defense",
      type: "input",
      name: "defense",
      validate: function(value){
        if(isNaN(value) === false &&
            parseInt(value) > 0 &&
            parseInt(value) <= 10){
              return true;
            }
        return false;
      }
    }
  ]).then(function(response){
    console.log(response);
    var player = new Player(response.name, response.position, response.offense, response.defense)

    team.push(player);
    if(starters.length >= 2){
      subs.push(player);
    } else {
      starters.push(player);
    }

    if(team.length < 3){
      createPlayer();
    } else {
      console.log("==========")
      console.log(team);
      console.log("==========")
      console.log(starters);
      console.log("==========")
      console.log(subs)

    }

  })
}


createPlayer();
