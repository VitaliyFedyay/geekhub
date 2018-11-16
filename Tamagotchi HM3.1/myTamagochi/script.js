function Tamagotchi(name) {
//variable declarations
  function Animal(time,health,clocker1,sleep,clocker4,play,clocker3,food,clocker2,gameover) {
    this.time = time;
    this.health = health;
    this.sleep = sleep;
    this.play = play;
    this.food = food;
    this.clocker = clocker1;
    this.clocker = clocker2;
    this.clocker = clocker3;
    this.clocker = clocker4;
    this.gameover = gameover;
  }
//create new pet
  let pet = new Animal(0, 100, setInterval(changeProgressHealth,1000), 100, setInterval(changeProgressFood,1000),
  100, setInterval(changeProgressPlay,1000), 100, setInterval(changeProgressSleep,1000), 100);
//conditions for changing the state of health
  function changeProgressHealth() {
    if(pet.health == 100) {
      document.getElementById('info-health').innerHTML = "I healthy";
      pet.health--; 
    } else if(pet.health == 50) {
      document.getElementById('info-health').innerHTML = "Your pet feels bad";
      pet.health--; 
    } else if(pet.health == 0) {
      document.getElementById('info-health').innerHTML = "Your pet is died";
      clearInterval(pet.clocker1);
      gameover();
    } else if(pet.health !== 0) {
      pet.health--; 
    }
    document.getElementById('health').value = pet.health;
  };
//conditions for changing the state of food
  function changeProgressFood() {
    if(pet.food == 100) {
      document.getElementById('info-food').innerHTML = "I do not want to eat";
      pet.food--; 
    } else if(pet.food == 50) {
      document.getElementById('info-food').innerHTML = "Your pet needs food";
      pet.food--; 
    } else if(pet.food == 0) {
      document.getElementById('info-food').innerHTML = "Your pet feels bad";
      clearInterval(pet.clocker2);
      gameover();
    } else if(pet.food !== 0) {
      pet.food--;
    }
    document.getElementById('food').value = pet.food; 
  };
//conditions for changing the state of play
  function changeProgressPlay() {
    if(pet.play == 100) {
      document.getElementById('info-play').innerHTML = "I do not want to play";
      pet.play--; 
    } else if(pet.play == 50) {
      document.getElementById('info-play').innerHTML = "Your pet needs play";
      pet.play--; 
    } else if(pet.play == 0) {
      document.getElementById('info-play').innerHTML = "Your pet feels bad";
      clearInterval(pet.clocker3);
      gameover();
    } else if(pet.play !== 0) {
      pet.play--; 
    }
    document.getElementById('play').value = pet.play; 
  };
//conditions for changing the state of sleep
  function changeProgressSleep() {
    if(pet.sleep == 100) {
      document.getElementById('info-sleep').innerHTML = "I do not want to sleep";
      pet.sleep--;  
    } else if(pet.sleep == 50) {
      document.getElementById('info-sleep').innerHTML = "Your pet needs sleep";
      pet.sleep--;  
    } else if(pet.sleep == 0) {
      document.getElementById('info-sleep').innerHTML = "Your pet feels bad";
      clearInterval(pet.clocker4);
      gameover();
    } else if(pet.sleep !== 0) {
      pet.sleep--;  
    }
    document.getElementById('sleep').value = pet.sleep;
  };
//call functions for a click
document.getElementById("stat-health").onclick = getHealth;
document.getElementById("stat-food").onclick = getFood;
document.getElementById("stat-play").onclick = getPlay;
document.getElementById("stat-sleep").onclick = getSleep;
document.getElementById("stat-kill").onclick = getKill;
document.getElementById("start").onclick = reloadPage;

//function for reload page
  function reloadPage() {
   location.reload()
  }
//check conditions for game over
  function gameover() {
    if(pet.sleep == 0 && pet.play == 0 && pet.food == 0 && pet.health == 0) {
      document.getElementById('died').innerHTML = "Tamagotchi is died!";
      petRip();
      delete pet;
    }
    else {
      petRip();
      delete pet;
    }
  }
//check conditions for change img
  function petRip() {
    if(pet.health == 0) {
    document.getElementById("rip").src = "img/died.jpg";
    }
  }

//game timer
  function gameTimer() {
    if(pet.sleep > 0 && pet.play > 0 && pet.food > 0 && pet.health > 0) {
      document.getElementById('timer').value = pet.time;
      pet.time++;
    }
  }
  setInterval(gameTimer,1000);
//check conditions for rip
  function getKill() {
    pet.food = 0;
    pet.sleep = 0;
    pet.play = 0;
    pet.health = 0;
    gameover();
    delete pet;
   }
//conditions for get health for pet
  function getHealth() {
    if (pet.health <= 99 && pet.health != 0) {
      pet.health += 10;
    } else if (pet.health == 0 || pet.health > 100) {
      pet.health += 0;
    } else if (pet.health <= 91 && pet.health <= 100) {
      pet.health += 100 - pet.health;
    }
  }
//conditions for get food for pet
  function getFood() {
    if (pet.food <= 99 && pet.food != 0) {
      pet.health += 10;
    } else if (pet.food == 0 || pet.food > 100) {
      pet.food += 0;
    } else if (pet.food <= 91 && pet.food <= 100) {
      pet.food += 100 - pet.food;
    }
  }
//conditions for get sleep for pet
  function getSleep() {
    if (pet.sleep <= 99 && pet.sleep != 0) {
      pet.sleep += 10;
    } else if (pet.sleep == 0 || pet.sleep > 100) {
      pet.sleep += 0;
    } else if (pet.sleep <= 91 && pet.sleep <= 100) {
      pet.sleep += 100 - pet.sleep;
    }
  }
//conditions for get play for pet
  function getPlay() {
    if (pet.play <= 99 && pet.play != 0) {
      pet.play += 10;
    } else if (pet.play == 0 || pet.play > 100) {
      pet.play += 0;
    } else if (pet.play <= 91 && pet.play <= 100) {
      pet.play += 100 - pet.play;
    }
  }

}
//start after full loading page
window.onload = function () {
  let check = true;
  while(check) {
    let name = prompt("enter animal name:");
    if(name == "" || name == null) {
      check = true;
    } else if(name !== null) {
      let playername = prompt("enter your name:");
      document.getElementById('info-health').innerHTML = "Hello " + playername;
      function func() {
        document.getElementById('info-food').innerHTML = "Follow the parameters";
        Tamagotchi(name);
      }
    setTimeout(func, 1000);
    check = false;
    }
  }
}

