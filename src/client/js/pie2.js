// 

var w2 = 300;
var h2 = 300;
var rad = h2/2;
var color = d3.scale.category20c();

var data2 = [{"label":"Dan It's lit.", "value":20}, 
              {"label":"Hello Dano", "value":30}, 
              {"label":"Dano", "value":30},
              {"label":"Dan", "value":20}];


var vis2 = d3.select('#pie2').append("svg:svg").data([data2]).attr("width", w2).attr("height", h2).append("svg:g").attr("transform", "translate(" + rad + "," + rad + ")");
var pie = d3.layout.pie().value(function(d){return d.value;});

// declare an arc generator function
var arc2 = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs2 = vis2.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
arcs2.append("svg:path")
    .attr("fill", function(d, i){
        return color(i);
    })
    .attr("d", function (d) {
        // log the result of the arc generator to show how cool it is :)
        // console.log(arc2(d));
        return arc2(d);
    });

// add the text
arcs2.append("svg:text").attr("transform", function(d){
      d.innerRadius = 0;
      d.outerRadius = r;
    return "translate(" + arc2.centroid(d) + ")";}).attr("text-anchor", "middle").attr("class", "pieLabel").text( function(d, i) {
    return data2[i].label;}
    );