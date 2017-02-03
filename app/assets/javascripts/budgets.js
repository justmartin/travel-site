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
			{ y: 19.75, indexLabel: "Accommodation {y}%" },
			{ y: 36.60, indexLabel: "Food {y}%" },
			{ y: 14.07, indexLabel: "Transport {y}%" },
			{ y: 26.84, indexLabel: "Entertainment {y}%" },
			{ y: 3.73, indexLabel: "Miscellaneous {y}%" }
			]
		}
		]
	});

	chart.render();

});




