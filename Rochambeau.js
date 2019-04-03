class Rochambeau {
    constructor() {
        this.player = new Player();
        this.computer = new Player();
        this.scoreboard = new Scoreboard();
        this.ROCK = 1;
        this.PAPER = 2;
        this.SCISSORS = 3;
    }

    storePlayerChoice(choice) {
        this.player.choice = choice;
        this.storeComputerChoice();
    }

    storeComputerChoice() {
        this.computer.choice = Math.ceil(Math.random() * 3)
    }

    determineOutcome() {
       let choice1 = this.player.choice
       let choice2 = this.computer.choice
        if(choice1 == choice2){
            return "tie";
        }
        if(choice1 == this.ROCK){
            if(choice2 == this.SCISSORS){
                return "win";
            }
            if(choice2 == this.PAPER){
                return "lose";
            }
        }
        if(choice1 == this.PAPER){
            if(choice2 == this.ROCK){
                return "win";
            }
            if(choice2 == this.SCISSORS){
                return "lose";
            }
        }
        if(choice1 == this.SCISSORS){
            if(choice2 == this.PAPER){
                return "win";
            }
            if(choice2 == this.ROCK){
                return "lose";
            }
        }
    }

    updateScoreboard() {

    }

    displayScoreboard() {

    }
}

class Player {
    constructor() {
        this.choice = ""
    }
}

class Scoreboard {
    constructor() {

    }
}
