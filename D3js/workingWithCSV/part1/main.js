
var h = 100;
var w = 400;
var ds; // global variable for data

 d3.csv("./MonthlySales.csv", function(error, data) {
  if (error) {
  console.log(error);
} else {
  console.log(data);
  ds=data;
}

})
