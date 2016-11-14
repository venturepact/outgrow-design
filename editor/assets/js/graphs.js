		//Morris charts snippet - js

$.getScript('http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js',function(){
$.getScript('http://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.0/morris.min.js',function(){

  Morris.Area({
    element: 'area-example',
    data: [
      { y: '1.1.', a: 10, b: 90 },
      { y: '2.1.', a: 75,  b: 65 },
      { y: '3.1.', a: 50,  b: 40 },
      { y: '4.1.', a: 75,  b: 65 },
      { y: '5.1.', a: 50,  b: 40 },
      { y: '6.1.', a: 75,  b: 65 },
      { y: '7.1.', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'], 
	fillOpacity: 0.4,
	  hideHover: 'auto',
	  behaveLikeLine: true,
	  resize: true,
	  pointFillColors: ['#fb545b'],
	  pointStrokeColors: ['#269fd8'],
	  lineColors: ['#fb545b', '#269fd8'],
  });
  
});
});	
 
 /*small graphs*/
FusionCharts.ready(function () {
    var sparkchart = new FusionCharts({
        type: 'sparkcolumn',
        renderAt: 'chart-container',
        width: '88%',
        height: '50',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "chartTopMargin": "0",
                "chartBottomMargin": "0",
                "chartRightMargin": "0",
                "numberPrefix": "$",
                "showBorder": "0",
                "canvasBorderThickness": "0",
                "bgColor": "#ffffff",                                                
                "plotFillColor": "#0075c2",
                "highColor": "#1aaf5d",
                "lowColor": "#8e0000",
                "showHoverEffect": "1"                
            },
            "dataset": [
                {
                    "data": [
                        {
                            "value": "783000"
                        },
                        {
                            "value": "601000"
                        },
                        {
                            "value": "515000"
                        },
                        {
                            "value": "315900"
                        },
                        {
                            "value": "388000"
                        },
                        {
                            "value": "433000"
                        },
                        {
                            "value": "910000"
                        },
                        {
                            "value": "798000"
                        },
                        {
                            "value": "483300"
                        },
                        {
                            "value": "562000"
                        },
                        {
                            "value": "359400"
                        },
                        {
                            "value": "485000"
                        }
                    ]
                }
            ]
        }
    })
    .render();
});

FusionCharts.ready(function () {
    var sparkchart = new FusionCharts({
        type: 'sparkcolumn',
        renderAt: 'chart-container1',
        width: '88%',
        height: '50',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "chartTopMargin": "0",
                "chartBottomMargin": "0",
                "chartRightMargin": "0",
                "numberPrefix": "$",
                "showBorder": "0",
                "canvasBorderThickness": "0",
                "bgColor": "#ffffff",                                                
                "plotFillColor": "#0075c2",
                "highColor": "#1aaf5d",
                "lowColor": "#8e0000",
                "showHoverEffect": "1"                
            },
            "dataset": [
                {
                    "data": [
                        {
                            "value": "783000"
                        },
                        {
                            "value": "601000"
                        },
                        {
                            "value": "515000"
                        },
                        {
                            "value": "315900"
                        },
                        {
                            "value": "388000"
                        },
                        {
                            "value": "433000"
                        },
                        {
                            "value": "910000"
                        },
                        {
                            "value": "798000"
                        },
                        {
                            "value": "483300"
                        },
                        {
                            "value": "562000"
                        },
                        {
                            "value": "359400"
                        },
                        {
                            "value": "485000"
                        }
                    ]
                }
            ]
        }
    })
    .render();
});

FusionCharts.ready(function () {
    var sparkchart = new FusionCharts({
        type: 'sparkcolumn',
        renderAt: 'chart-container2',
        width: '88%',
        height: '50',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "chartTopMargin": "0",
                "chartBottomMargin": "0",
                "chartRightMargin": "0",
                "numberPrefix": "$",
                "showBorder": "0",
                "canvasBorderThickness": "0",
                "bgColor": "#ffffff",                                                
                "plotFillColor": "#0075c2",
                "highColor": "#1aaf5d",
                "lowColor": "#8e0000",
                "showHoverEffect": "1"                
            },
            "dataset": [
                {
                    "data": [
                        {
                            "value": "783000"
                        },
                        {
                            "value": "601000"
                        },
                        {
                            "value": "515000"
                        },
                        {
                            "value": "315900"
                        },
                        {
                            "value": "388000"
                        },
                        {
                            "value": "433000"
                        },
                        {
                            "value": "910000"
                        },
                        {
                            "value": "798000"
                        },
                        {
                            "value": "483300"
                        },
                        {
                            "value": "562000"
                        },
                        {
                            "value": "359400"
                        },
                        {
                            "value": "485000"
                        }
                    ]
                }
            ]
        }
    })
    .render();
});


FusionCharts.ready(function () {
    var sparkchart = new FusionCharts({
        type: 'sparkcolumn',
        renderAt: 'chart-container3',
        width: '88%',
        height: '50',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "chartTopMargin": "0",
                "chartBottomMargin": "0",
                "chartRightMargin": "0",
                "numberPrefix": "$",
                "showBorder": "0",
                "canvasBorderThickness": "0",
                "bgColor": "#ffffff",                                                
                "plotFillColor": "#0075c2",
                "highColor": "#1aaf5d",
                "lowColor": "#8e0000",
                "showHoverEffect": "1"                
            },
            "dataset": [
                {
                    "data": [
                        {
                            "value": "783000"
                        },
                        {
                            "value": "601000"
                        },
                        {
                            "value": "515000"
                        },
                        {
                            "value": "315900"
                        },
                        {
                            "value": "388000"
                        },
                        {
                            "value": "433000"
                        },
                        {
                            "value": "910000"
                        },
                        {
                            "value": "798000"
                        },
                        {
                            "value": "483300"
                        },
                        {
                            "value": "562000"
                        },
                        {
                            "value": "359400"
                        },
                        {
                            "value": "485000"
                        }
                    ]
                }
            ]
        }
    })
    .render();
});




FusionCharts.ready(function () {
    var sparkchart = new FusionCharts({
        type: 'sparkcolumn',
        renderAt: 'chart-container4',
        width: '88%',
        height: '50',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "chartTopMargin": "0",
                "chartBottomMargin": "0",
                "chartRightMargin": "0",
                "numberPrefix": "$",
                "showBorder": "0",
                "canvasBorderThickness": "0",
                "bgColor": "#ffffff",                                                
                "plotFillColor": "#0075c2",
                "highColor": "#1aaf5d",
                "lowColor": "#8e0000",
                "showHoverEffect": "1"                
            },
            "dataset": [
                {
                    "data": [
                        {
                            "value": "900000"
                        },
                        {
                            "value": "601000"
                        },
                        {
                            "value": "515000"
                        },
                        {
                            "value": "315900"
                        },
                        {
                            "value": "388000"
                        },
                        {
                            "value": "433000"
                        },
                        {
                            "value": "910000"
                        },
                        {
                            "value": "798000"
                        },
                        {
                            "value": "483300"
                        },
                        {
                            "value": "562000"
                        },
                        {
                            "value": "359400"
                        },
                        {
                            "value": "485000"
                        }
                    ]
                }
            ]
        }
    })
    .render();
});

	google.charts.load('current', {packages: ['corechart', 'line']});
	google.charts.setOnLoadCallback(drawChart);
			  function drawChart() {

				var data = google.visualization.arrayToDataTable([
				  ['Task', 'Hours per Day'],
				  ['',5],
				  ['', 10],
				  ['',9],
				]);
				
				var options = {
				  'width':250,  'height':320,
				  backgroundColor: 'transparent',
				  legend: 'none',
				  colors: ['#f38630', '#69d2e7', '#e0e4cc']
				  
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart'));
				chart.draw(data, options);
				var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
				chart.draw(data, options);
				var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
				chart.draw(data, options);
			  }
			  
			   google.charts.setOnLoadCallback(drawRegionsMap);

			  function drawRegionsMap() {

				var data = google.visualization.arrayToDataTable([
				  ['Country', 'Popularity'],
				  ['Germany', 200],
				  ['United States', 300],
				  ['Brazil', 400],
				  ['Canada', 500],
				  ['France', 600],
				  ['India', 600],
				  ['RU', 700]
				]);
				var options = {'width':250,  'height':180,
				 colors: ['#ce5050', '#f17a52', '#f9de71']
				 };

				var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
				chart.draw(data, options);
			  }
			  