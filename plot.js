// import { Chart } from './canvasjs.min';

// import Chart from './canvasjs.min';

// var Chart = require('canvasjs.min.js')

const { Chart } = require('canvasjs.min')

window.onload = function () {
var chart = new Chart("chartContainer", {
	theme: "light1", // "light2", "dark1", "dark2"
	animationEnabled: true, // change to false
	title:{
		text: "Basic Column Chart"
	},
	data: [
	{
		// Change type to "bar", "area", "spline", "pie",etc.
		type: "column",
		dataPoints: [
			{ label: "apple",  y: 10  },
			{ label: "orange", y: 15  },
			{ label: "banana", y: 25  },
			{ label: "mango",  y: 30  },
			{ label: "grape",  y: 28  }
		]
	}
	]
});
chart.render();
}