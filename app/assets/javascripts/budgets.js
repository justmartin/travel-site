$(document).on('turbolinks:load', function() {

  CanvasJS.addColorSet("setOne",
  [//colorSet Array
		"#1ae0c7",
		"#34393f",
		"#ffe854",
		"#3a9dc2",
		"#87898d"                
  ]);

  //==============================================================================
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
	var thailand2Chart = new CanvasJS.Chart("thailand-chart-2", {

		colorSet: "setOne",

		title: {
			text: "Thailand 3/30/16 - 4/26/16",
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
			{ y: 19.35, legendText:"Food", indexLabel: "$531.52" },
			{ y: 21.24, legendText:"Entertainment", indexLabel: "$583.56" },
			{ y: 29.59, legendText:"Accommodation", indexLabel: "$812.77" },
			{ y: 22.95, legendText:"Transport", indexLabel: "$630.36" },
			{ y: 6.88, legendText:"Miscellaneous", indexLabel: "$188.88" }
			]
		}
		]
	});

	//==============================================================================
	var indonesiaChart = new CanvasJS.Chart("indonesia-chart", {

		colorSet: "setOne",

		title: {
			text: "Indonesia 4/26/16 - 5/11/16",
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
			{ y: 26.33, legendText:"Food", indexLabel: "$419.95" },
			{ y: 12.20, legendText:"Entertainment", indexLabel: "$194.56" },
			{ y: 44.13, legendText:"Accommodation", indexLabel: "$703.92" },
			{ y: 13.67, legendText:"Transport", indexLabel: "$218.07" },
			{ y: 3.67, legendText:"Miscellaneous", indexLabel: "$58.53" }
			]
		}
		]
	});

	//==============================================================================
	var singaporeChart = new CanvasJS.Chart("singapore-chart", {

		colorSet: "setOne",

		title: {
			text: "Singapore 5/11/16 - 5/14/16",
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
			{ y: 17.22, legendText:"Food", indexLabel: "$72.90" },
			{ y: 9.69, legendText:"Entertainment", indexLabel: "$41.01" },
			{ y: 38.98, legendText:"Accommodation", indexLabel: "$165.00" },
			{ y: 28.91, legendText:"Transport", indexLabel: "$122.37" },
			{ y: 5.19, legendText:"Miscellaneous", indexLabel: "$21.97" }
			]
		}
		]
	});

	//==============================================================================
	thailand1Chart.render();
	vietnamChart.render();
	cambodiaChart.render();
	thailand2Chart.render();
	indonesiaChart.render();
	singaporeChart.render();

});




