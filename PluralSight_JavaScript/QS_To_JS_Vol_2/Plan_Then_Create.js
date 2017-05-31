/* PLANNING A PROJECT:
-----------------------------------------------------------
1. WHAT DO YOU WANT TO MAKE
-----------------------------------------------------------

I want to create a zombie text adventure game where the player starts with a random scenario. They search for a weapon and fight a zombie.
The player has a 33% chance of getting bitten and losing, or killing the zombie and winning.


------------------------------------------------------------
2. WHAT STEPS DO YOU THINK ARE NECESSARY?
------------------------------------------------------------

Beginning:
1. Write scenarios
2. Store a list of possible scenarios
3. Alert a random scenario from the list of possible scenarios

Weapon:
1. Create a list of weapons
2. Save the list of weapons
3. Alert which weapon the player finds.

------------------------------------------------------------
3. WHAT SYNTAX OR CODING PATTERNS MIGHT YOU USE?
------------------------------------------------------------

Arrays for lists
Need multiple random numbers on a randomNumber function
------------------------------------------------------------
Remember: There are many ways to create things with code! The  most iportant part is to write it and get it woring .If you can't get something to work, try makng it simpler. After, look for ways you might improve your corde.
*/

var beginningScenarios = ["You wake up in a hospital. It is eerily quiet. You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods." ];

function randomNumber(range){
  return Math.round(Math.random() * range  );
}

alert( beginningScenarios[
    randomNumber(beginningScenarios.length - 1) ] );

var weaponList = ["shovel", "crossbow", "baseball bat", "rubber chicken"];

var weapon = weaponList[ randomNumber( weaponList.length -1) ];
alert("Being that it is the zombie apocalype, you decide to search for a weapon first. After surveying your surroundigns, you notice and grab a " + weapon + ".");

alert("Suddenly a zombie bursts through the door! You ready your " + weapon + " and advance towards the zombie.");

var survival = randomNumber(2);

if(survival === 0 ){
  alert("The zombie bits you. You lose!!!");
} else if (survival > 0) {
  alert("You kill the zombie with your " + weapon + ". You win!");
}
