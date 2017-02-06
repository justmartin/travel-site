$(document).on('turbolinks:load', function() {

  CanvasJS.addColorSet("setOne",
  [//colorSet Array
		"#1ae0c7",
		"#34393f",
		"#ffe854",
		"#3a9dc2",
		"#87898d"                
  ]);

  CanvasJS.addColorSet("setTwo",
  [//colorSet Array
		"#BAFF29",
		"#1A1B41",
		"#F1FFE7",
		"#C2E7DA",
		"#6290C3"                
  ]);

	var thailand1Chart = new CanvasJS.Chart("thailand-chart-1", {

		colorSet: "setTwo",

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

	thailand1Chart.render();

});




