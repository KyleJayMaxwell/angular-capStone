var wid = 150 ,
  hei = 150,
  radius = Math.min(wid, hei) / 2;

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var arch = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var label = d3.svg.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

var pie1 = d3.layout.pie()
    .sort(null)
    .value(function(dano) { return dano.percentage; });

var savage = d3.select("#chart").append("svg")
    .attr("width", wid)
    .attr("height", hei)
    .append("g")
    .attr("transform", "translate(" + wid / 2 + "," + hei / 2 + ")");

d3.csv("data.csv", type, function(error, data) {
  if (error) throw error;

  var gq = savage.selectAll(".arc")
      .data(pie1(data))
    .enter().append("g")
      .attr("class", "arc");

  gq.append("path")
      .attr("d", arch)
      .style("fill", function(dano) { return color(dano.data.energy); });

  gq.append("text")
      .attr("transform", function(dano) { return "translate(" + label.centroid(dano) + ")"; })
      .attr("dy", ".35em")
      .text(function(dano) { return dano.data.energy; });
});

function type(dano) {
  dano.percentage = +dano.percentage;
  return dano;
}