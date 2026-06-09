class Hero{
    constructor(name,hp,attackDamage){
        this.name = name;
        this.hp = hp ;
        this.attackDamage =attackDamage ;
    }
    attack(target){
        target.takeDamage(this.attackDamage);
    }
    takeDamage(damage){
    this.hp = this.hp - damage;
    if (this.hp < 0){
        this.hp = 0;
    }
    console.log(`${this.name} bị đánh!Máu còn lại:${this.hp} `);
     }
    }
    
    let arthur = new Hero("Arthur",1000,50);
    let valhein = new Hero("Valhein",800,80);
    
arthur.attack(valhein);

console.log("Arthur HP:", arthur.hp);
console.log("Valhein HP:", valhein.hp);