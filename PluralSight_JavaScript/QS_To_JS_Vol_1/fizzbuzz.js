var randomNumber = Math.round(Math.random()*15);


console.log(randomNumber);

if(randomNumber % 3 === 0 && randomNumber !== 0){
  if (randomNumber % 5 === 0) {
    alert("fizzbuzz");
  }
}
else if (randomNumber % 5 === 0 && randomNumber !== 0){
  alert("buzz");
}
else {
  console.log(randomNumber)
}
