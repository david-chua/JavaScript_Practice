d3 principles:

- d3.select("body") - the select chooses which part of html will be touched upon. In this case "body" means the body of the text

- .append operator adds a new object to the html
  .append("svg") adds an svg object
  .append("rect") adds a rect object

- Style operators
  - use to set body form of our visual
  .attr - sets attribute
  .style - sets css properties example as: .style("fill", "blue")

We don't have to put each items in a new line. we can chain things together like
d3.select("body").append("svg").attr("width", 50).attr("width, 60") and such. 
