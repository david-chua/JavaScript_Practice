var h = 350;
var w = 400;

monthlySales = [
  {"month": 10, "sales": 100},
  {"month": 20, "sales": 130},
  {"month": 30, "sales": 250},
  {"month": 40, "sales": 300},
  {"month": 50, "sales": 265},
  {"month": 60, "sales": 225},
  {"month": 70, "sales": 100},
  {"month": 80, "sales": 120},
  {"month": 90, "sales": 145},
  {"month": 100, "sales": 130},
];

var lineFun = d3.svg.line()
.x(function(d) { return d.month*3; })
.y(function(d) {return h-d.sales})
.interpolate("basis");

var svg = d3.select("body").append("svg").attr({
  width: w, height: h
});

var viz = svg.append("path") // when you want to draw something, Path takes data given and draws it for us.
//Looking in the google chrome console, we can see that a path has been made.
.attr({
  d: lineFun(monthlySales),
  "stroke": "purple",
  "fill": "none"
});

// add labels
var labels = svg.selectAll("text")
  .data(monthlySales)
  .enter()
  .append("text")
  .text(function(d){return d.sales;})
  .attr({
    x: function(d){return d.month * 3 - 20},
    y: function(d) { return h-d.sales},
    "font-size": "12px",
    "font-family": "sans-serif",
    "fill": "#666666",
    "text-anchor": "start",
    "dy": ".35ems",
    "font-weight": function(d,i) {
      if (i === 0 || i == (monthlySales.length-1)) { // monthlysales.length -1 gives the last item in the code
        return "bold";}
        else {
          return "normal";}
      }

    });
