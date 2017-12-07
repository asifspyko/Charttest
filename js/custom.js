// KeyBoard & Mouse Activity Chart
var keyboardMouseActivityCtx = document.getElementById("keyboard-mouse-activity-chart").getContext('2d');
var keyboardMouseActivityChartData = [-25, -20, -20, -16, -14, -13, -13, -12, -11, -10]
var keyboardMouseActivityChartData2 = [70, 80, 80, 85, 87, 90, 90, 90, 93, 95]
var keyboardMouseActivityChart = new Chart(keyboardMouseActivityCtx, {
	type: 'bar',
	data: {
		labels: ["GD", "TY", "MC", "Stan Kandakov", "KC", "QT", "TJ", "PJ", "BM", "WE"],
		datasets: [{
			label: 'Low Activity',
			data: keyboardMouseActivityChartData,
			backgroundColor: "#ff0000",
			borderWidth: 0,
			fill: false,
		}, {
			label: 'Normal Activity',
			data: keyboardMouseActivityChartData2,
			borderWidth: 0,
			fill: false,
		}]
	},
	options: {
		tooltips: {
			callbacks: {
				label: function(tooltipItem, data, tooltipItems) {
					var dataset = data.datasets[tooltipItem.datasetIndex];
					test = dataset;
					var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
						return previousValue + currentValue;
					});
					var currentValue = dataset.data[tooltipItem.index];
					var dummyPer = Math.floor(((currentValue / 100) * 100) + 0.5);
					var precentage = (dummyPer < 0) ? -dummyPer : dummyPer;
					return [" " + dataset.label + " " + precentage + "%"];
				}
			}
		},
		legend: {
			display: true,
			labels: {
				display: true,
				boxWidth: 15,
				fontFamily: 'Roboto',
				fontSize: 15,
			}
		},
		responsive: true,
		scales: {
			xAxes: [{
				stacked: true,
				gridLines: {
					display: false,
					drawBorder: false,
				},
				ticks: {

					display: false,
					fontFamily: 'Roboto',
					fontColor: "#7e878c ",
					fontSize: 14
				}
			}],
			yAxes: [{
				stacked: true,
				gridLines: {
					display: true,
					borderDash: [5, 8],
					drawBorder: false,
				},
				ticks: {
					padding: 20,
					display: true,
					callback: function(value, index, values) {
						var precentage = (value < 0) ? -value : value;
						return precentage + " %";
					},
					fontFamily: 'Roboto',
					fontColor: "#7e878c",
					fontSize: 14,
					stepSize: 50,
					min: -100,
					max: 100,
				}
			}]
		}
	}
});


// Time tracked Chart
var timeTrackedChartCtx = document.getElementById("time-tracked-chart").getContext('2d');
var timeTrackedData1 = [95, 55, 110, 70, 110, 30, 10];
var timeTrackedData2 = [65, 125, 140, 145, 140, 50, 25];
var timeTrackedData3 = [135, 105, 125, 105, 130, 40, 30];
var timeTrackedData4 = [110, 75, 90, 90, 50, 0, 15];
var timeTrackedData5 = [40, 45, 70, 70, 65, 20, 5];
var timeTrackedCtx = new Chart(timeTrackedChartCtx, {
	type: 'line',
	data: {
		labels: ["May 15", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21"],
		datasets: [{
				label: 'P Designer',
				data: timeTrackedData1,
				borderColor: "#5f6d9d",
				backgroundColor: "#5f6d9d",
				borderWidth: 4,
				lineTension: 0,
				fill: false,
				pointBackgroundColor: "#5f6d9d",
				pointRadius: 0,
				pointHoverRadius: 4,
				pointHoverBackgroundColor: "#4d5f9e",
				pointHoverBorderColor: "#4d5f9e",
				pointBorderColor: "#4d5f9e"
			},
			{
				label: 'P Managers',
				data: timeTrackedData2,
				borderColor: "#f74932",
				backgroundColor: "#f74932",
				borderWidth: 4,
				lineTension: 0,

				fill: false,
				pointBackgroundColor: "#f74932",
				pointRadius: 0,
				pointHoverRadius: 4,
				pointHoverBackgroundColor: "#ed3219",
				pointHoverBorderColor: "#ed3219",
				pointBorderColor: "#ed3219"
			},
			{
				label: 'P Developers',
				data: timeTrackedData3,
				borderColor: "#ffb403",
				backgroundColor: "#ffb403",
				borderWidth: 4,
				lineTension: 0,

				fill: false,
				pointBackgroundColor: "#ffb403",
				pointRadius: 0,
				pointHoverRadius: 4,
				pointHoverBackgroundColor: "#dd9d08",
				pointHoverBorderColor: "#dd9d08",
				pointBorderColor: "#dd9d08"
			},
			{
				label: 'Support',
				data: timeTrackedData4,
				borderColor: "#4dcb7d",
				backgroundColor: "#4dcb7d",
				borderWidth: 4,
				lineTension: 0,

				fill: false,
				pointBackgroundColor: "#4dcb7d",
				pointRadius: 0,
				pointHoverRadius: 4,
				pointHoverBackgroundColor: "#34c16a",
				pointHoverBorderColor: "#34c16a",
				pointBorderColor: "#34c16a"
			},
			{
				label: 'Translation',
				data: timeTrackedData5,
				borderColor: "#05d6f1",
				backgroundColor: "#05d6f1",
				borderWidth: 4,
				lineTension: 0,
				fill: false,
				pointBackgroundColor: "#05d6f1",
				pointRadius: 0,
				pointHoverRadius: 4,
				pointHoverBackgroundColor: "#09bad1",
				pointHoverBorderColor: "#09bad1",
				pointBorderColor: "#09bad1"
			}
		]
	},
	options: {
		legend: {
			display: true,
			labels: {
				display: true,
				usePointStyle: true,
				fontFamily: 'Roboto',
				fontSize: 12
			}
		},
		responsive: true,
		scales: {
			xAxes: [{
				gridLines: {
					display: false,
					drawBorder: false,
					tickMarkLength: 10,
				},
				ticks: {
					display: true,
					fontFamily: 'Roboto',
					fontColor: "#7e878c",
					fontSize: 14
				}
			}],
			yAxes: [{
				gridLines: {
					display: true,
					borderDash: [5, 8],
					drawBorder: false,
				},
				ticks: {
					display: true,
					callback: function(value, index, values) {
						return value + "h";
					},
					padding: 20,
					fontFamily: 'Roboto',
					fontColor: "#7e878c",
					fontSize: 14,
					stepSize: 50,
					min: 0,
					max: 200,
				}
			}]
		}
	}
}); 