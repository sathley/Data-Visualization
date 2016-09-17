var data = [{"x": "0.0-0.1", "y": 0}, {"x": "0.1-0.2", "y": 0}, {"x": "0.2-0.3", "y": 0}, {"x": "0.3-0.4", "y": 0}, {"x": "0.4-0.5", "y": 0}, {"x": "0.5-0.6", "y": 0}, {"x": "0.6-0.7", "y": 0}, {"x": "0.7-0.8", "y": 0}, {"x": "0.8-0.9", "y": 0}, {"x": "0.9-1.0", "y": 0}];

function loadData() {
	
	var client = new XMLHttpRequest();
	client.open('GET', 'https://gist.githubusercontent.com/sathley/94b79ed5ec19361ed93f936328d0ea35/raw/e00a99d5e571f956adb0e007fa55bb15c9e0be91/FA-set1.txt', false);
	client.send(null);
	var lines = client.responseText.split('\n');
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i].split(' ');
		for (var j = 0; j < line.length - 1; j++) {
			var num = parseFloat(line[j]);
			if (num > 0 && num <= 0.1)
				data[0].y++;
			else if (num > 0.1 && num <= 0.2)
				data[1].y++;
			else if (num > 0.2 && num <= 0.3)
				data[2].y++;
			else if (num > 0.3 && num <= 0.4)
				data[3].y++;
			else if (num > 0.4 && num <= 0.5)
				data[4].y++;
			else if (num > 0.5 && num <= 0.6)
				data[5].y++;
			else if (num > 0.6 && num <= 0.7)
				data[6].y++;
			else if (num > 0.7 && num <= 0.8)
				data[7].y++;
			else if (num > 0.8 && num <= 0.9)
				data[8].y++;
			else if (num > 0.9 && num <= 1.0)
				data[9].y++;
		}
	}

}

function plotChart() {
	var xScale = new Plottable.Scales.Category();
	var yScale = new Plottable.Scales.Linear();
	var xLabel = new Plottable.Components.AxisLabel("Fractional Anisotropy");
	var yLabel = new Plottable.Components.AxisLabel("# of points", 270);
	var plot = new Plottable.Plots.Bar()
		.addDataset(new Plottable.Dataset(data))
		.x(function(d) {
			return d.x;
		}, xScale)
		.y(function(d) {
			return d.y;
		}, yScale)
		.animated(true)
		;

	var xAxis = new Plottable.Axes.Category(xScale, "bottom");
	xAxis.tickLabelAngle(-90);
	var yAxis = new Plottable.Axes.Numeric(yScale, "left");
	var table = new Plottable.Components.Table([
		[yLabel, yAxis, plot],
		[null, null, xAxis],
		[null, null, xLabel]
	]);
	table.renderTo("svg#mysvg");

}

window.onload = function() {
	loadData();
	plotChart();
}