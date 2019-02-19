
window.onload = function () {

// Fuel Reserve
var chart = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
	axisX: {
		valueFormatString: "DDD",
		minimum: new Date(2017, 1, 5, 23),
		maximum: new Date(2017, 1, 12, 1)
	},
	axisY: {
		title: "Amount in L"
	},
	legend: {
		verticalAlign: "top",
		horizontalAlign: "right",
		dockInsidePlotArea: true
	},
	toolTip: {
		shared: true
	},
	data: [{
		name: "Left in Storage",
		showInLegend: true,
		legendMarkerType: "square",
		type: "area",
		color: "#3D89D5",
		markerSize: 0,
		dataPoints: [
			{ x: new Date(2017, 1, 6), y: 10000 },
			{ x: new Date(2017, 1, 7), y: 9500 },
			{ x: new Date(2017, 1, 8), y: 9000 },
			{ x: new Date(2017, 1, 9), y: 7000 },
			{ x: new Date(2017, 1, 10), y: 6500 },
			{ x: new Date(2017, 1, 11), y: 6000 },
			{ x: new Date(2017, 1, 12), y: 5000 }
		]
	},
	{
		name: "Used",
		showInLegend: true,
		legendMarkerType: "square",
		type: "area",
		color: "#D53D3D",
		markerSize: 0,
		dataPoints: [
			{ x: new Date(2017, 1, 6), y: 500 },
			{ x: new Date(2017, 1, 7), y: 500 },
			{ x: new Date(2017, 1, 8), y: 500 },
			{ x: new Date(2017, 1, 9), y: 2000 },
			{ x: new Date(2017, 1, 10), y: 500},
			{ x: new Date(2017, 1, 11), y: 500 },
			{ x: new Date(2017, 1, 12), y: 1000 }
		]
	}]
});
chart.render();

// Water Tank Data
var chart = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	theme: "light2",
	axisY: {
		title: "Reserved in Litre"
	},
	data: [{        
		type: "column",
		dataPoints: [      
			{ y: 435754, label: "Water Levels" },
		]
	}]
});
chart.render();

// Food Reserve
var chart = new CanvasJS.Chart("chartContainer3", {
	animationEnabled: true,
	theme: "light2",
	axisY: {
		title: "Reserves in kg"
	},
	data: [{        
		type: "column",
		dataPoints: [      
			{ y: 123722, label: "Wheat" },
			{ y: 198343,  label: "Chicken" },
			{ y: 172364,  label: "Beef" },
			{ y: 133467,  label: "Canned Food" },
			{ y: 101238,  label: "Rice" },
			{ y: 163247, label: "Fish" },
		]
	}]
});
chart.render();

// Engine Temperature
var chart = new CanvasJS.Chart("chartContainer4", {
	axisY: {
		title: "Temperature (°C)",
		suffix: " °C"
	},
	data: [{
		type: "column",	
		yValueFormatString: "#,### °C",
		indexLabel: "{y}",
		dataPoints: [
			{ label: "engine1", y: 206 },
			{ label: "engine2", y: 163 },
			{ label: "engine3", y: 154 },
			{ label: "engine4", y: 176 },
			{ label: "engine5", y: 184 },
			{ label: "engine6", y: 122 }
		]
	}]
});

function updateChart() {
	var boilerColor, deltaY, yVal;
	var dps = chart.options.data[0].dataPoints;
	for (var i = 0; i < dps.length; i++) {
		deltaY = Math.round(2 + Math.random() *(-2-2));
		yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
		boilerColor = yVal > 200 ? "#FF2500" : yVal >= 170 ? "#FF6000" : yVal < 170 ? "#6B8E23 " : null;
		dps[i] = {label: "Engine "+(i+1) , y: yVal, color: boilerColor};
	}
	chart.options.data[0].dataPoints = dps; 
	chart.render();
};
updateChart();

setInterval(function() {updateChart()}, 500);


}


