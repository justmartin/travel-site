$(document).on('turbolinks:load', function() {

	var chart = new CanvasJS.Chart("chartContainer", {
		title: {
			text: "Thailand 3/2/16 - 3/12/16",
			fontFamily: "Raleway"
		},
		legend:{
  			fontFamily: "Raleway"
 		},
		animationEnabled: true,
		theme: "theme2",
		data: [
		{
			type: "doughnut",
			indexLabelFontFamily: "Raleway",
			indexLabelFontSize: 15,
			startAngle: 0,
			indexLabelFontColor: "dimgrey",
			indexLabelLineColor: "darkgrey",
			toolTipContent: "{y} %",
			showInLegend: true,

			dataPoints: [
			{ y: 36.60, legendText:"Food", indexLabel: "$279.50" },
			{ y: 26.84, legendText:"Entertainment", indexLabel: "$205.00" },
			{ y: 19.75, legendText:"Accommodation", indexLabel: "$150.84" },
			{ y: 13.07, legendText:"Transport", indexLabel: "$99.84" },
			{ y: 3.73, legendText:"Miscellaneous", indexLabel: "$28.48" }
			]
		}
		]
	});

	chart.render();

});




