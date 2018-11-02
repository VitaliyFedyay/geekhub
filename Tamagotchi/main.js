'use strict'

class Tamagotchi {

	constructor(name){
		this.name = name;
		this.health = 100;
	}

	healthLo() {
		this.health -= 20;
	}

	healthHi() {
		this.health += 20;
	}

	hello() {
		alert('HI! My name is ' + this.name + ' Play with me!');
	}

	eat() {
		let eatHamster = confirm("I want to eat...");
		if(eatHamster) {
		this.healthHi();
		alert(this.name + " eating now...plus to health 20% " + this.health );
		} else {
			this.healthLo();
			alert('Time to drink...');
		}
	}

	drink() {
		let drinkHamster = confirm("I want to drink...");
		if(drinkHamster) {
		this.healthHi();
		alert(this.name + " drinking now...plus to health 20% " + this.health );
		} else {
			this.healthLo();
			alert('Time to sleep...');
		}
	}

	sleep() {
		let sleepHamster = confirm("I want to sleep...");
		if(sleepHamster) {
		this.healthHi();
		alert(this.name + " sleeping now...plus to health 20% " + this.health );
		} else {
			this.healthLo();
			alert('Time to play...');
		}
	}

	play() {
		let playHamster = confirm("I want to play...");
		if(playHamster) {
		this.healthHi();
		alert(this.name + " playing now...plus to health 20% " + this.health );
		} else {
			this.healthLo();
			if(this.health > 20) {
				alert("I like you");
				} else {
				alert("I want to died...help me!");
				} 
		}
	}
	

	sick() {
		alert('pills dont help!!!');
	}

	died() {
		alert('Sorry! Your ' + this.name + ' is died!!!');
	}

}

let name = prompt('Enter please name: ','name');

let hamster = new Tamagotchi(name);

setTimeout(function() {
	hamster.hello();
},2000);

setTimeout(function() {
	hamster.eat();
},4000);

setTimeout(function() {
	hamster.drink();
},6000);

setTimeout(function() {
	hamster.sleep();
},8000);

setTimeout(function() {
	hamster.play();
},10000);

setTimeout(function() {
	hamster.sick();
},12000);

setTimeout(function() {
	hamster.died();
},14000);
