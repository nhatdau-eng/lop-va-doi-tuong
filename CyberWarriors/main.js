class Character {
    constructor(name = "Unknown",classType){
    this.name = name ;
    this.classType = classType ;

    this.level = 1 ;
    this. hp = 100 ;
    this.isAlive = true ;
    this.inventory = [];
    }
}
let player1 = new Character( "Neo","Hacker");
let player2 = new Character( "Trinity", "Gunner");
let player3 = new Character( undefined, "Warrior");

console.log(player1);
console.log(player2);
console.log(player3);