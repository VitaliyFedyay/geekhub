'use strict'

class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  hello() {
    console.log('HI! My name is ' + this.name + '! Play with me!');
  }

  eat() {
    let eatHamster = confirm("I want to eat...");
    if(eatHamster) {
      this.health += 20;
      console.log("current health value:" + this.health );
    } else {
        this.health -= 20;
        console.log("current health value:" + this.health);
     }
  }

  drink() {
    let drinkHamster = confirm("I want to drink...");
    if(drinkHamster) {
      this.health += 20;
      console.log("current health value:" + this.health );
    } else {
        this.health -= 20;
        console.log("current health value:" + this.health);
      }
  }

  sleep() {
    let sleepHamster = confirm("I want to sleep...");
    if(sleepHamster) {
      this.health += 20;
      console.log("current health value:" + this.health );
    } else {
        this.health -= 20;
        console.log("current health value:" + this.health);
      }
  }

  play() {
    let playHamster = confirm("I want to play...");
    if(playHamster) {
      this.health += 20;
      console.log("current health value:" + this.health );
    } else {
        this.health -= 20;
        console.log("current health value:" + this.health );
      }
  }
  

  relax() {
    this.health -=50;
    console.log('I WANT TO RELAX!!' + "current health value:" + this.health);
  }

  died() {
    console.log('Sorry! Your ' + this.name + ' is died!!!' + "current health value:" + this.health);
  }

}

let name = prompt('Enter please name: ','name');

let hamster = new Tamagotchi(name);

if (hamster) {
  hamster.hello();
}

let timerId = setInterval(function() {

if(hamster.health >= 20 && hamster.health <= 40) {
  hamster.eat();
}

else if(hamster.health >= 40 && hamster.health <= 60) {
  hamster.sleep();
}

else if(hamster.health >= 60 && hamster.health <= 80) {
  hamster.play();
}

else if(hamster.health >= 80 && hamster.health <= 100) {
  hamster.drink();
} 
else if(hamster.health > 100) {
  hamster.relax();
} else {
    hamster.died();
    clearTimeout(timerId);
    console.log('GAME OVER! YOU LOSER!')
  }
},2000);