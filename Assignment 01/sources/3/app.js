var data = [{
	"val": 0
}, {
	"val": 0
}, {
	"val": 0
}, {
	"val": 0
}, {
	"val": 0
}];

function loadData() {
	var client = new XMLHttpRequest();
	client.open('GET', 'https://gist.githubusercontent.com/sathley/94b79ed5ec19361ed93f936328d0ea35/raw/e00a99d5e571f956adb0e007fa55bb15c9e0be91/FA-set1.txt', false);
	client.send(null);
	var lines = client.responseText.split('\n');
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i].split(' ');
		for (var j = 0; j < line.length - 1; j++) {
			var num = parseFloat(line[j]);
			if (num > 0 && num <= 0.2)
				data[0].val++;
			else if (num > 0.2 && num <= 0.4)
				data[1].val++;
			else if (num > 0.4 && num <= 0.6)
				data[2].val++;
			else if (num > 0.6 && num <= 0.8)
				data[3].val++;
			else if (num > 0.8 && num <= 1.0)
				data[4].val++;
		}
	}

}

function plotChart() {
	var scale = new Plottable.Scales.Linear();
	var plot = new Plottable.Plots.Pie()
		.addDataset(new Plottable.Dataset(data))
		.labelsEnabled(true)
		.sectorValue(function(d) {
			return d.val;
		}, scale)
		.renderTo("svg#mysvg");
	//legend
	var colorScale = new Plottable.Scales.Color();
	var legend = new Plottable.Components.Legend(colorScale);
	colorScale.domain(["0.0-0.2", "0.2-0.4", "0.4-0.6", "0.6-0.8", "0.8-1.0"]);

	legend.xAlignment("left")
		.yAlignment("bottom")
		.symbol(Plottable.SymbolFactories.square)
		.renderTo("svg#mysvg");

}

window.onload = function() {
	loadData();
	plotChart();
}