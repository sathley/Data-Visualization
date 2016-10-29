var data = [];
var patientIds = [];
var c20c = d3.scale.category20c();

var stressColorScale = new Plottable.Scales.InterpolatedColor("log");
stressColorScale.range(["#B71C1C", "#FFCDD2"]);

var ptsdColorScale = new Plottable.Scales.InterpolatedColor("log");
ptsdColorScale.range(["#880E4F", "#FCE4EC"]);

var speechColorScale = new Plottable.Scales.InterpolatedColor("log");
speechColorScale.range(["#4A148C", "#F3E5F5"]);

var anxietyColorScale = new Plottable.Scales.InterpolatedColor("log");
anxietyColorScale.range(["#311B92", "#EDE7F6"]);

var scales = {
  "1" : stressColorScale,
  "2" : ptsdColorScale,
  "3" : speechColorScale,
  "4" : stressColorScale
}

function loadData() {
  data = [];
  var client = new XMLHttpRequest();
  client.open('GET', 'https://gist.githubusercontent.com/sathley/3f2fc239b1f4ceb1461bf3921f0963ff/raw/ee9e3ead401534225df2a0fab186bb4f7e73b2e3/patient_data.csv', false);
  client.send(null);
  var lines = client.responseText.split('\n');
  var previousPatientId = -1;
  var x = 0;
  var y = 0;
  var tbi = 200;



  // calculate total and tbi for biggest patient

  for (var i = 1; i < lines.length; i++) {
    var line = lines[i].split(',');
    
    if (line[1] == previousPatientId) {
      x++;
    } else {
      y++;
      x = 0;
      previousPatientId = line[1];
      patientIds.push(line[1].toString());
    }
    data.push({
      x: x,
      y: y,
      symptom: parseInt(line[3]),
      id: line[1],
      days_since_tbi: parseInt(line[2]) 
    });
  }
}

function plotChart() {
  var xScale = new Plottable.Scales.Category();
  var yScale = new Plottable.Scales.Category();
  yScale.domain(patientIds);

  

  var plot = new Plottable.Plots.Rectangle()
    .addDataset(new Plottable.Dataset(data))
    
    .x(function(d) {
      return d.x;
    }, xScale)
    //.x2(function(d) {
    //  return d.x+1;
    //}, xScale)
    
    .y(function(d) {
      return d.id;
    }, yScale)
    //.y2(function(d) {
    //  return d.y+1;
    //}, yScale)
    .attr("fill", function(d) {
      return scales[(d.symptom % 4) + 1].scale(Math.abs(d.days_since_tbi));
    })
    .labelsEnabled(true)
    .label(function(d) {
      return d.id;
    });


    var yAxis = new Plottable.Axes.Category(yScale, "left");
    //yAxis.content().addClass('axis-tick');
    var table = new Plottable.Components.Table([
      [yAxis, plot]
    ]);
    table.renderTo("svg#basicChart");

}

function makeChart() {
  loadData();
  plotChart();
};