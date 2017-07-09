var w = 300;
var h = 100;
var padding = 2; // padding to use for giving bar spaces
var dataset = [5,10,14,20,25];
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
svg.selectAll("rect")
    .data(dataset)
    .enter() // create if not created
    .append("rect")
      .attr("x", function(d, i){ //d for dataset in d3
        return i * (w/ dataset.length);
      })
      .attr("y", function(d) {
        return h - (d *4); // due to d3's functionality, d is created upside down
      })
      .attr("width", w/ dataset.length - padding)
      .attr("height", function(d) {
        return d*4;
      })
      .attr("fill", function(d){
        return "rgb(" + d*10 + "," + (d*10) + ", 0)";
      });
