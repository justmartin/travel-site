$(document).on('turbolinks:load', function() {

  CanvasJS.addColorSet("setOne",
  [//colorSet Array
		"#1ae0c7",
		"#34393f",
		"#ffe854",
		"#3a9dc2",
		"#87898d"                
  ]);

	var thailand1Chart = new CanvasJS.Chart("thailand-chart-1", {

		colorSet: "setOne",

		title: {
			text: "Thailand 3/2/16 - 3/12/16",
			fontFamily: "Rubik"
		},
		legend:{
  			fontFamily: "Rubik"
 		},
		animationEnabled: true,
		theme: "theme2",
		data: [
		{
			type: "doughnut",
			indexLabelFontFamily: "Rubik",
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

//==============================================================================
	var vietnamChart = new CanvasJS.Chart("vietnam-chart", {

		colorSet: "setOne",

		title: {
			text: "Vietnam 3/13/16 - 3/23/16",
			fontFamily: "Rubik"
		},
		legend:{
  			fontFamily: "Rubik"
 		},
		animationEnabled: true,
		theme: "theme2",
		data: [
		{
			type: "doughnut",
			indexLabelFontFamily: "Rubik",
			indexLabelFontSize: 15,
			startAngle: 0,
			indexLabelFontColor: "dimgrey",
			indexLabelLineColor: "darkgrey",
			toolTipContent: "{y} %",
			showInLegend: true,

			dataPoints: [
			{ y: 13.76, legendText:"Food", indexLabel: "$155.23" },
			{ y: 0, legendText:"Entertainment", indexLabel: "$0.00" },
			{ y: 42.47, legendText:"Accommodation", indexLabel: "$479.22" },
			{ y: 34.29, legendText:"Transport", indexLabel: "$387.00" },
			{ y: 9.49, legendText:"Miscellaneous", indexLabel: "$107.04" }
			]
		}
		]
	});
	
	//==============================================================================
	var cambodiaChart = new CanvasJS.Chart("cambodia-chart", {

		colorSet: "setOne",

		title: {
			text: "Cambodia 3/23/16 - 3/29/16",
			fontFamily: "Rubik"
		},
		legend:{
  			fontFamily: "Rubik"
 		},
		animationEnabled: true,
		theme: "theme2",
		data: [
		{
			type: "doughnut",
			indexLabelFontFamily: "Rubik",
			indexLabelFontSize: 15,
			startAngle: 0,
			indexLabelFontColor: "dimgrey",
			indexLabelLineColor: "darkgrey",
			toolTipContent: "{y} %",
			showInLegend: true,

			dataPoints: [
			{ y: 16.61, legendText:"Food", indexLabel: "$112.04" },
			{ y: 16.46, legendText:"Entertainment", indexLabel: "$111.00" },
			{ y: 21.85, legendText:"Accommodation", indexLabel: "$147.35" },
			{ y: 32.31, legendText:"Transport", indexLabel: "$217.90" },
			{ y: 12.77, legendText:"Miscellaneous", indexLabel: "$86.10" }
			]
		}
		]
	});

	//==============================================================================
	thailand1Chart.render();
	vietnamChart.render();
	cambodiaChart.render();

});




