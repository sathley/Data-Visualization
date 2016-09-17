var data = [];

function loadData() {
	var client = new XMLHttpRequest();
	client.open('GET', 'https://gist.githubusercontent.com/sathley/94b79ed5ec19361ed93f936328d0ea35/raw/e00a99d5e571f956adb0e007fa55bb15c9e0be91/FA-set1.txt', false);
	client.send(null);
	var lines = client.responseText.split('\n');
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i].split(' ');
		for (var j = 0; j < line.length - 1; j++) {
			data.push({
				"x": i,
				"y": j,
				"radius": line[j] * 2.5
			});
		}
	}

}

function plotChart() {
	var xScale = new Plottable.Scales.Linear();
	var yScale = new Plottable.Scales.Linear();
	var plot = new Plottable.Plots.Scatter()
		.x(function(d) {
			return d.x;
		}, xScale)
		.y(function(d) {
			return d.y;
		}, yScale)
		.size(function(d) {
			return d.radius;
		})
		.attr("stroke", "#FFF")
		.addDataset(new Plottable.Dataset(data));

	plot.renderTo("svg#mysvg");
	var colorScale = new Plottable.Scales.InterpolatedColor();
	colorScale.range(["#000", "#FFF"]);
	var legend = new Plottable.Components.InterpolatedColorLegend(colorScale);
	colorScale.domain([0, 1]);
	legend.xAlignment("center");
	legend.yAlignment("bottom");
	legend.renderTo("svg#mysvg");
}

window.onload = function() {
	loadData();
	plotChart();
}