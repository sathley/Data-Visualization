var data = [];
var patientIds = [];
var symptomScale = new Plottable.Scales.Color("Category20c");
symptomScale.domain(["Stress", "PTSD", "Speech", "Anxiety", "Depression", "Headache", "Sleep", "Audiology", "Vision", "Neurologic", "Alzheimer", "Cognitive", "PCS"]);
function arrange(arr) {
  var newOrder = [];
  if(arr.length == 0)
    return;

  var lastBeforeTBI = arr[arr.length - 1];
  var lastBeforeTBIIndex = arr.length - 1;
  
  for(;lastBeforeTBIIndex >= 0; lastBeforeTBIIndex--) {
    if(arr[lastBeforeTBIIndex].days_since_tbi < 0)
      break;
  }
  lastBeforeTBI = arr[lastBeforeTBIIndex];

  var jump = -1;

  var j = lastBeforeTBIIndex;
  for(jump = -1; jump > -200; jump--) {
    if(typeof arr[j] === 'undefined') {
      // does not exist
      arr[j] = {
        x: jump,
        y: -1

      }
    }
    else {
      // does exist
      arr[j].x = jump;
    }
    j--;
  }
  
  jump = 1;
  for(var j = lastBeforeTBIIndex + 1; j < arr.length; j++) {
    if(typeof arr[j] === 'undefined') {
      // does not exist

    }
    else {
      // does exist
      arr[j].x = jump;
      jump++;
    }
  }
  return arr;
}

function loadData() {
  data = [];
  var temp_row = [];
  var client = new XMLHttpRequest();
  client.open('GET', 'https://gist.githubusercontent.com/sathley/3f2fc239b1f4ceb1461bf3921f0963ff/raw/645b3b2e47dab886122f53f6aeae1f86f3b8159b/patient_data.csv', false);
  client.send(null);
  var lines = client.responseText.split('\n');
  var previousPatientId = -1;
  var x = -1;
  var y = -1;

  for (var i = 1; i < lines.length; i++) {
    var line = lines[i].split(',');
    
    if (line[1] == previousPatientId) {
      x++;

      temp_row.push({
        x: -1,
        y: y,
        symptom: parseInt(line[3]),
        id: line[1],
        days_since_tbi: parseInt(line[2])
      });

    } 
    else {
      y++;
      x = 0;
      previousPatientId = line[1];
      patientIds.push(line[1].toString());
      
      data = data.concat(arrange(temp_row));
      
      temp_row = [];
    }
     
  }
}

function plotChart() {
  var xScale = new Plottable.Scales.Category();
  var yScale = new Plottable.Scales.Category();
  yScale.domain(patientIds);

  var plot = new Plottable.Plots.Rectangle()
    .addDataset(new Plottable.Dataset(data))
    
    .x(function(d) {
      if(typeof d != 'undefined') {
        return d.x;
      }
      else {
        return 0;
      }
        
    }, xScale)
    
    .y(function(d) {
      if(typeof d != 'undefined') {
        return d.id;
    }
    }, yScale)

    .attr("fill", function(d) {
      var domain = symptomScale.domain();
      return symptomScale.scale(domain[d.symptom-1]);
    })

    .labelsEnabled(true)
    .label(function(d) {
      return d.id;
    });

    var yAxis = new Plottable.Axes.Category(yScale, "left");
    yAxis.annotationsEnabled(true);
    //yAxis.addClass('axis-label');

    var legend = new Plottable.Components.Legend(symptomScale);
    legend.maxEntriesPerRow(7);
    legend.xAlignment("center");
    legend.yAlignment("center");
    //legend.addClass('axis-label');

    var table = new Plottable.Components.Table([
      [yAxis, plot],
      [null, legend]
    ]);

    table.renderTo("svg#basicChart");
}

function makeChart() {
  loadData();
  plotChart();
};