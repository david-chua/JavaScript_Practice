var mark = {
  name: "Mark",
  tshirtColor: "Navy Blue"
};

var lisa = {
  name: "Lisa",
  tshirtColor: "Red"
};

// Try to stay DRY in code

//Constructor function start with capital letter

function Friend(name, tshirtColor){
  this.name = name;
  this.tshirtColor = tshirtColor;
}

// function above expects two arguments.

var denny = new Friend("Denny", "Green");
