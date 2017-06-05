var app=angular.module("ContactApp");

app.controller("MainController", function(DataService) {

	var self = this;
	
//	 EmployeeService.getEmployees()
//		.then(function(data){
//			self.emps =  data;
//		});

    var USmap = new Datamap({
        element: document.getElementById("container"),
        scope: 'usa', //currently supports 'usa' and 'world', however with custom map data you can specify your own
        projection: 'equirectangular', //style of projection to be used. try "mercator"
        height: 520, //if not null, datamaps will grab the height of 'element'
        fills: {
        	    HIGH: '#afafaf',
                LOW: '#123456',
                MEDIUM: 'blue',
                UNKNOWN: 'rgb(0,0,0)',
                defaultFill: 'green'
        },
        geographyConfig: {
            highlightBorderColor: '#bada55',
            popupTemplate: function (geography, data) {
                return '<div class="hoverinfo">' + geography.properties.name + '</div>';
            },
            highlightBorderWidth: 2
        }
    });
    USmap.labels({'customLabelText': DataService.emp_data});
	
    //USmap.legend();
	
});