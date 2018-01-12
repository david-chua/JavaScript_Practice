// more simplified version
var w = 300;
var h = 100;
var padding = 2; // padding to use for giving bar spaces
var dataset = [5,10,14,20,25,11,25,22,18,7];
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

function colorPicker(v) {
  if (v <= 20) {return "#666666";}
  else if (v > 20) { return "#FF0033";}
}
svg.selectAll("rect")
    .data(dataset)
    .enter() // create if not created
    .append("rect")
  .attr({
    x: function(d,i) {return i * (w/dataset.length);},
    y: function(d) {return h- (d*4);},
    width: w/ dataset.length-padding,
    height: function(d) { return d*4},
    fill: function(d) {return colorPicker(d);}
  })
  .on("mouseover", function(d){

    svg.append("text")
        .text(d)
        .attr({
          "text-anchor": "middle",
          x:parseFloat(d3.select(this).attr("x"))+       parseFloat(d3.select(this).attr("width")/2),
          y: parseFloat(d3.select(this).attr("y")) + 12,
          "font-family": "sans-serif",
          "font-size": 12,
          "fill": "#ffffff",
          id: "tooltip"
        });
 })

 .on("mouseout", function(){
   d3.select("#tooltip").remove();
 });
