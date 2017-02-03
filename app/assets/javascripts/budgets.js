$(document).on('turbolinks:load', function() {

	var chart = new CanvasJS.Chart("chartContainer", {
		title: {
			text: "Thailand 3/2/16 - 3/12/16"
		},
		animationEnabled: true,
		theme: "theme2",
		data: [
		{
			type: "doughnut",
			indexLabelFontFamily: "Garamond",
			indexLabelFontSize: 20,
			startAngle: 0,
			indexLabelFontColor: "dimgrey",
			indexLabelLineColor: "darkgrey",
			toolTipContent: "{y} %",

			dataPoints: [
			{ y: 19.75, indexLabel: "$150.84" },
			{ y: 36.60, indexLabel: "$279.50" },
			{ y: 14.07, indexLabel: "$99.84" },
			{ y: 26.84, indexLabel: "$205.00" },
			{ y: 3.73, indexLabel: "$28.48" }
			]
		}
		]
	});

	chart.render();

});




